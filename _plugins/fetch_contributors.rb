require 'net/http'
require 'yaml'

def fetch_contributors_at(path, api_url:)
  threshold_days = 1
  if File.exist?(path) && (Time.now - File.mtime(path) < threshold_days*24*60*60)
    return
  end
  Jekyll.logger.info("Data pulling:", "Fetching the contributors of the project")
  response = JSON.parse(Net::HTTP.get(URI.join(api_url, "contributors")))
  contributors = response.map do |contributor|
    { 
      "avatar_url" => contributor["avatar_url"],
      "html_url" => contributor["html_url"],
      "login" => contributor["login"]
    }
  end
  File.open(path, 'w') {|f| f.write contributors.to_yaml }
end

# Generates the _data/contributors file if the file doesn't exist
# or it was updated more than 1 day ago.
Jekyll::Hooks.register :site, :after_init do |site|
  contributors_path = File.join(Dir.pwd, site.config["data_dir"], "contributors.yml")
  fetch_contributors_at(contributors_path, api_url: site.config["urls"]["api"])
end