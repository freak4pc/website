---
layout: home
---

<p style="text-align: center">
  <img src="{{site.url}}/images/logo.png" height="200px"/>
</p>

# What 🦄

# Install ⬇️

```bash
# Do something
```


# Why Xcode Project Manager 🚢

Hola Xcoder! I'm glad that you are interested in using Xcode Project Manager. You might have read that *xpm* is a tool that helps you use Xcode at scale, but that might sound a bit ambiguous.

Xcode is a great IDE, with awesome tools that developers can use to develop stunning apps. However, it was designed a long time ago when they couldn't have foreseen the size of the projects and teams that are building apps nowadays. As a result, there are certain issues that come up when using Xcode at that scale. **Some of those issues are:**

- **A monolithic project model:** Most of the project settings live in a single file. When the team is large, it's very likely that developers introduce changes into that file from multiple branches, and have to spend some time solving conflicts.
- **Not reusable projects:** If you have a project with a structure that you'd like to replicate or reuse in another project, you might have realized that it's not possible. You'll have to create that second project and set it up manually. The only Xcode feature that allows reusability across projects is `.xcconfig` files, but those are just for build settings.
- **Dependencies implicitness:** When a project is single, e.g. a main target and its tests target, it's easy to understand what depends on what. If you keep creating targets and adding dependencies is hard to know what the dependency graph looks like. This can lead to misconfigurations and compilation issues like *"framework not found"*, or *"header test.h is missing"*.
- **Settings consistency:** Similarly, when you have a lot of targets and projects, it's hard to ensure that the settings are consistent accross all the projects. For example, if you wrongly setup one your frameworks to compile for the platform macOS and try to link it from an iOS target, you'll get a not-readable compiler error.

**Does any of these issues resonate with you?** If they don't do it yet, they'll do sooner or later if your project keeps growing.

It's been a few years struggling with them and with no solution coming from Apple. Developers keep asking for a [Swift Package Manager](https://swift.org/package-manager/) that is compatible with Xcode projects but the project seems to be very focused on Swift packages and its dependencies.

With nothing out there that could help developers with those issues aforementioned, I set on to build Xcode Project Manager. It's probably one of my largest open source projects and the one I'm most proud about. 

## Project generation

*xpm* leverages Xcode project generation to address the presented scalability issues. In a nutshell, developers define their projects in a more modular and reusable format, a `Project.swift` that *xpm* parses and uses to generate a Xcode project and provide an easy-to-use CLI.

The idea is simple, yet powerful. Thanks to the project generation we can:

- **Catch errors earlier:** If we can detect something before the compiler starts doing its job we do it. Surprisingly, there are many things that can be caught before the compiler can catch them.
- **Make implicitness explicit:** We understand your project structure and the dependencies so we can make that information explicit for you. If you want to get a json representation of your project, you can dump the `Project.swift`.
- **Facilitate consistency:** We leverage Swift and modules to allow reusing parts of your projects. Instead of duplicating settings all over the place you can define them in a shared file, and reuse it everywhere. You can part of your project, including schemes or targets. 


We are very excited about all the doors that this opens, and all the opportunities ahead to challenge the standars. We hope you find the project useful and we are looking forward to getting feedback from you. **We'll continue rowing on our tiny boat at full speed next to Apple's cruise**.