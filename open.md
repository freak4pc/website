---
layout: page
title: Open Source Projects
permalink: /open-source/
---

At Tuist we design and develop projects in the open following Unix's principle:

> Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features".

Our tools and libraries are made up by combining smaller building blocks in different repositories. Each of them is versioned, documented and includes documentation to use and contribute to them. All of them embrace the [MIT license](https://opensource.org/licenses/MIT) so that you are free to leverage them to build your tools.

The following projects are part of the Tuist organization:

<div class="open__grid">
{% for project in site.data.projects %}
  <div class="open__box">
  <a href="{{project.url}}" target="__blank"><h2>{{ project.name }}</h2></a>
  <p>{{ project.description }}</p>
  <p class="open__box-license">{{ project.license }}</p>
  <div>
    <a href="{{project.url}}" target="__blank"><i class="fab fa-github"></i></a>
    <a href="{{project.reference}}" target="__blank"><i class="fas fa-book"></i></a>
  </div>
  </div>
{% endfor %}
</div>