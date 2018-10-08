require 'net/http'
require 'yaml'

def fetch_projects_at(path, projects:, api_url:)
  threshold_days = 1
  if File.exist?(path) && (Time.now - File.mtime(path) < threshold_days*24*60*60)
    return
  end

  Jekyll.logger.info("Data pulling:", "Fetching open source projects")
  response = JSON.parse(Net::HTTP.get(URI.join(api_url, "projects")))
  projects = response.select { |p| projects.include?(p["name"]) }.map do |project|
    { 
      "description" => project["description"],
      "topics" => project["topics"],
      "language" => project["language"],
      "license" => project["license"]["name"],
      "reference" => project["homepage"],
      "url" => project["html_url"]
    }
  end
  File.open(path, 'w') {|f| f.write projects.to_yaml }
end

# Generates the _data/projects.yml file if the file doesn't exist
# or it was updated more than 1 day ago.
Jekyll::Hooks.register :site, :after_init do |site|
  open_source_path = File.join(Dir.pwd, site.config["data_dir"], "open_source.yml")
  projects_path = File.join(Dir.pwd, site.config["data_dir"], "projects.yml")
  return unless File.exist?(open_source_path)
  projects = YAML.load_file(open_source_path)

  fetch_projects_at(projects_path, projects: projects, api_url: site.config["urls"]["api"])
end