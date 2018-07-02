---
layout: post
title:  "Introducing Xcode Project Manager"
date:   2018-06-29 09:56:06 +0200
categories: jekyll update
excerpt: Xcode Project Manager was oficially released. Read more on this blog post about what motivated us to build XPM and how it can help you scale your Xcode projects.
---

It's been a year since I started working on a Xcode project parser. The goal was implementing a tool that would help large teams scale their Xcode projects. At that time I was doing a lot of research on modularizing Xcode projects. It helped overcoming common issues such as compilation times, which **had a very negative impact on developer productivity and motivation**. You can read more about it [here](https://github.com/pepibumur/microfeatures-guidelines).

Modularization turned out to be a good first step, but not enough. Modularizing a codebase results in a lot of workspaces, projects, schemse and targets that we need to maintain, with an associated cost. Xcode helps a bit by providing configuration files to reuse build settings. Most of the settings are codified into Xcode projects, so that we can **only modify them using the API that Apple provides, Xcode.**

With some work, and a lot of lines of code, I'm thrilled to present the tool I've been working on. It will support you on using Xcode at scale: [**Xcode Project Manager (xpm)**](https://github.com/xcode-project-manager). It's by far the largest open source projects I've worked on. It's entirely written in Swift and its core leverages Xcode project generation. It abstracts some implicitness and maintenance hassle so that you don't have to worry about it.

## Convention over configuration
Like the Swift Package Manager (SPM), which you might already be familiar with, XPM aims for convention over configuration. SPM established the definition of a Swift "Package" and provided a set of tools for creating package projects and managing dependencies. By following a predefined set of conventions, the tool ensures a predictable output, which allows catching misconfigurations early.

XPM took the same approach and applied it to Xcode projects, regardless of its nature or structure. It allows developers to define their project in a type-safe `Project.swift`, known as manifest. As you can see below, the manifest format is aligned with the Xcode project structure with a subtle difference, it facilitates reusing project attributes thanks to the Swift language.

```swift
import ProjectDescription

 let project = Project(name: "HelloWorld",
              schemes: [
                  /* Project schemes are defined here */
                  Scheme(name: "HelloWorld",
                         shared: true,
                         buildAction: BuildAction(targets: ["HelloWorld"])),
              ],
              settings: Settings(base: [:]),
              targets: [
                  Target(name: "HelloWorld",
                         platform: .iOS,
                         product: .app,
                         bundleId: "com.xcodepm.HelloWorld",
                         infoPlist: "Info.plist",
                         dependencies: [
                             /* Target dependencies can be defined here */
                             /* .framework(path: "framework") */
                         ],
                         settings: nil,
                         buildPhases: [
                            
                             .sources([.sources("./Sources/*")]),
                             /* Other build phases can be added here */
                             /* .resources([.include(["./Resources/**/*"])]) */
                        ]),
            ])
```

## Failing early

One of the advantages of abstracting you from Xcode project implicitness is that we can catch misconfigurations earlier and fail. This will save you time waiting for the compiler to complain with unlcear error messages. Here are some examples that might be familiar to you:

- When a watch extension doesn't have a valid bundle id: `com.domain.app.watchkitapp.watchkitextension`.
- When a target is trying to link a target from another platform.

Xcode sets things up the right way when you create new projects and targets, and it's hopeful about developers not screwing it up. Unfortunately, we often do.

**XPM runs some strict checks and throws descriptive errors when a potential source of compilation errors is found.**

## Dependencies

Another core feature of XPM is its built-in support for local dependencies. You can define:

- Dependencies between targets in the same project.
- Dependencies between targets in different projects.
- Dependencies with precompiled frameworks *(e.g. Carthage)*.
- Dependencies with precompiled libraries.

For instance, the connection between a test target and the target being tested is a dependency. When dependencies are specified, XPM does all the necessary setup. You don't have to worry about where the framework needs to be embedded or what flags need to be added to the target build settings. That's great 🎉, isn't it?

> If a dependency contains architectures that are not needed for the device we are building the app for, XPM configures the project to strip the unnecessary architectures.

## Building and testing

Like the SPM, XPM exposes two commands, `build` and `test`. If you are in a folder that contains a `Project.swift` or a `Workspace.swift` you can run:

```bash
xpm test -t MyTarget
xpm build -t MyTarget
```

XPM will generate the Xcode project and run `xcodebuild` with the right arguments. The output is the same as the `xcodebuild` command so that you can use formatters like [xcpretty](http://localhost:8000/blog/2018-05-05-release/). It also proxies any arguments that you pass to `xcodebuild` so you that you don't have to wait for XPM to give support for new arguments introduced in `xcodebuild`.

## Reusability
Imagine that you have two projects, `/A/Project.swift` and `/B/Project.swift`, and you would like them to have the same targets setup. If you tried to do that with Xcode you'd realize it's impossible, because the information is encoded in your Xcode project. **Thanks to Swift and its built-in support for modules**, XPM allows you to do it easily:

```swift
//include ./Shared.swift

let project = Project(name: "HelloWorkd", 
                      schemes: [],
                      settings: Settings(),
                      targets: frameworkTargets(name: "HelloWorld"))
```

Manifest files can include other Swift files that get compiled together when the manifes tis parsed. In the example above, we include a Swift file that contains some shared definitions. In particular, the shared file defines a funciton, `frameworkTargets`, that returns the list of targets to be used in our project.

```swift
// Shared.swift
import ProjectDescription

func frameworkTargets(name: String) -> [Target] {
  var targets: [Target] = []
  // Add your targets here
  return targets
}
```

## Start using it

If you'd like to give it a try, we made the installation process very easy for you. Just go to your terminal and execute:

```bash
// To define
```

It will install a binary in your system that will manage xpm versions automatically. Right after running the script, you can create your first project with:

```
xpm init --platform ios --type application
xpm generate
```

It'll generate all the necessary files in the current directory and generate an Xcode project that you can open with Xcode.

## What's next

First of all, we'd like to collect as much feedback as possible from allof you. We'd love to understand what your needs are, which problems you face and have a constructive discussion to keep improving the tool.

There are a lot of ideas in the backlog around how XPM could help teams. Unfortunately, the project is starting and we are a few developers working on our spare time to make it possible. **If the projectsounds exciting to you and you'd like to contribute, you are invited to do so.**

I can't wait to see how you use XPM and all the ideas that come out of it.

Happy Xcoding! ❤️👩‍💻