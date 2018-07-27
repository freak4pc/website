---
layout: home
---

# What 🦄

Xcode Project Manager (XPM) is a command line tool that helps teams maintain and work with large Xcode projects. It leverages project generation to abstract developers from Xcode and provide them with a standard and convenient CLI API. The tool is [open source](https://github.com/xcode-project-manager) and entirely written in Swift:

### Features

- 🐦 Type-safe Swift manifests editable with Xcode.
- ↗️ Local dependencies support.
- ⚠️ Misconfiguration catching.
- 📦 Precompiled binaries (Frameworks & Libraries support).
- 🔄 Circular dependency detection.
- 👷‍♀️ `build` and `test` commands.
- ⌨️ Project bootstrapping from the terminal.
- ✅ Tasks automation.

### Coming soon
- 🔑 Built-in certificates management.
- 📱 `release` command.
- 📄 Template system.

# Install ⬇️

```bash
# Do something
```


# Why Xcode Project Manager 🚢

Xcode is a great IDE, with awesome tools that developers can use to develop stunning apps. However, it was designed a long time ago when they couldn't have foreseen the size of the projects and teams that are building apps nowadays. As a result, there are certain issues that come up when using Xcode at that scale. **Some of those issues are:**

- **A monolithic project model:** Most of the project settings live in a single file. When the team is large, it's very likely that developers introduce changes into that file from multiple branches, and have to spend some time solving conflicts.
- **Not reusable projects:** If you have a project with a structure that you'd like to replicate or reuse in another project, you might have realized that it's not possible. You'll have to create that second project and set it up manually. The only Xcode feature that allows reusability across projects is `.xcconfig` files, but those are just for build settings.
- **Dependencies implicitness:** When a project is single, e.g. a main target and its tests target, it's easy to understand what depends on what. If you keep creating targets and adding dependencies is hard to know what the dependency graph looks like. This can lead to misconfigurations and compilation issues like *"framework not found"*, or *"header test.h is missing"*.
- **Settings consistency:** Similarly, when you have a lot of targets and projects, it's hard to ensure that the settings are consistent accross all the projects. For example, if you wrongly setup one your frameworks to compile for the platform macOS and try to link it from an iOS target, you'll get a not-readable compiler error.

**Does any of these issues resonate with you?** If they don't do it yet, they'll do sooner or later if your project keeps growing.

It's been a few years struggling with them and with no solution coming from Apple. Developers keep asking for a [Swift Package Manager](https://swift.org/package-manager/) that is compatible with Xcode projects but the project seems to be very focused on Swift packages and its dependencies.

With nothing out there that could help developers with those issues aforementioned, I set on to build Xcode Project Manager.