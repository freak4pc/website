class WindowHighlight < Jekyll::Tags::HighlightBlock
  def render(context)
    <<~TAG
    <div class="home__window">
      <div class="home__window-bar">
        <div class="home__window-close"></div>
        <div class="home__window-minimize"></div>
        <div class="home__window-maximize"></div>
        <div style="flex: 1"></div>
      </div>
      <div class="home__window-content">
      #{super}
      </div>
    </div>
    TAG
  end
end

Liquid::Template.register_tag('window_highlight', WindowHighlight)