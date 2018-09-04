---
layout: post
title:  "Introducing Tuist"
date:   2018-06-29 09:56:06 +0200
categories: jekyll update
excerpt: Tuist was oficially released. Read more on this blog post about what motivated us to build Tuist and how it can help you scale your Xcode projects.
author: pepibumur
---



It's been a year since I started working on a Xcode project parser. The goal was implementing a tool that would help large teams scale their Xcode projects. At that time I was doing a lot of research on modularizing Xcode projects. It helped overcoming common issues such as compilation times, which **had a very negative impact on developer's productivity and motivation**. You can read more about it [here](https://github.com/pepibumur/microfeatures-guidelines).

Modularization turned out to be a good first step, but not enough. There was another set of challenges that Xcode and the existing tooling didn't help with. Complex Xcode projects, inconsistent settings that led to unexpected compilation errors, or non-standardized and unreliable automation DSLs are some examples of challenges that teams face when their teams and projects grow.

Companies like [Facebook](https://facebook.com), [Airbnb](https://medium.com/airbnb-engineering/building-mixed-language-ios-project-with-buck-8a903b0e3e56), [Uber](https://eng.uber.com/ios-monorepo/), or [Pinterest](https://www.youtube.com/watch?v=wewAVF-DVhs) invest a fair amount of resources into addressing those challenges, for example, replacing the Xcode build system. However, not all the companies can afford it, and those have to battle the aforementioned issues in a daily basis. As you can imagine, that's one of the last things an app developer wants to be doing as part of their job.

When I looked at the spectrum of tooling I found out that there were options on both extremes, but nothing in the middle for those medium-size companies to adopt. One one side, there was Xcode, `xcodebuild`, and [Fastlane](https://github.com/fastlane), and on the other side, alternative build systems such as [Buck](https://github.com/facebook/buck), or [Bazel](https://bazel.build).

I felt there was a clear need for a tool, which had user-experience oriented focus, and that helped medium-size companies overcome the scaling struggles. I'm happy to share with you a very early version of that tool, Tuist. In this blog post I'll talk about the goal of Tuist, how we plan to achieve it, and hopefully, convince you give give it a try and contribute to the project.


## 🙉 What makes scaling difficult?

Before we dive into what Tuist does and how, I think it's important to understand why Tuist in the first place. I briefly mentioned in the introduction that the growth of a project comes with some challenges which I'd like to extend in this section. In my experience, the points below are a common pattern in medium-size companies:

- **Configuring the project right:** Configuring a multi-target project can be a challenge, unless you use CocoaPods to define the project, which does all that work for you. As opposed to Android, where Gradle infers most of the build settings for you, Xcode expects you to do it right. That's not easy, especially if it's a large project with transitive dependencies. When you create a new project, it compiles and everything works, but as you start adding targets, dependencies, build settings, it's your responsibility to make sure the project configuration is in a healthy state. The validation of your settings usually happens at compilation time, and sometimes when you are sending the app to the store.

- **Non-actionable errors** When something unexpected happens, you may get an error that doesn't tell you much about what happened. *What caused this?* *What does this mean?* *What do I need to do to fix this?* Sometimes, the solution is reverting your changes on git and trying again. 

- **Non-standard DSLs:** How do I build target `Core`? Should I execute `fastlane build_core`, or is it `fastlane core_build`? Fastlane is powerful, and gives you tons of flexibility, but that comes at a cost: inconsistencies and complexity. On one side, each project defines their set of lanes, which are maintained by the team responsible for the project. Unless the collaboration and communication is is good across teams, each `Fastfile` in the project will be different from the others, even though they usually expose a similar set of actions. Furthermore, those `Fastfiles` are rarely tested, which leads to unreliable automation logic which can break at any time without you noticing it. Have you ever experienced your continuous integration pipelines green for a week, and then failing when you try to release the app?

- **Reusing configuration:**


## 🧠 How does it work?

**In a nutshell, Tuist leverages projects generation to address those challenges.** Instead of having Xcode projects and workspaces, developers define the projects in manifesft files, which Tuist uses to generate the projects and workspaces and provide you with a reliable, easy to use and standard actions.

A manifest file is a `Project.swift` file, which looks like this:

{% highlight swift %}
import ProjectDescription

let project = Project(name: "MyApp",
                      targets: [
                        Target(name: "MyApp",
                               platform: .iOS,
                               product: .app,
                               bundleId: "io.tuist.MyApp",
                               infoPlist: "Info.plist",
                               sources: "Sources/**",
                               dependencies: [
                                    /* Target dependencies can be defined here */
                                    /* .framework(path: "framework") */
                                ]),
                        Target(name: "MyAppTests",
                               platform: .iOS,
                               product: .unitTests,
                               bundleId: "io.tuist.MyAppTests",
                               infoPlist: "Tests.plist",
                               sources: "Tests/**",
                               dependencies: [
                                    .target(name: "MyApp")
                               ])
                      ])
{% endhighlight %}

If you have used the [Swift Package Manager](https://swift.org/package-manager/) before this approach might sound familiar to you. One of benefits of defining the project in a Swift file instead of formats like YAML or JSON is that you can leverage Xcode to validate the syntax and get code auto-completion.

Generating the project allows us **understand your project** and **hide implementation details and complexities**. Some project elements are intentionally not available in the manifest. Instead, we provide a simpler interface and we deal with the complexity.

Take for instance linking dependencies. If you have linked dynamic frameworks before you might already know that all transitive dynamic dependencies need to be embedded into the apps. If you forget about any transitive dependencies, you end up the simulator linker complaining about frameworks not found. With Tuist, that's not a problem anymore. You tell us what depends on what, and we set up the right build settings and build phases. 


<!-- We leverage project generation but we don't limit the project to that. -->

## 📱 Start using it
Would you like to give Tuist a try? You can check out the [Getting started](/guides/1-getting-started) guide that explains how to install the tool and how to bootstrap your first project.

## 🖌 Design principles
I read that GitHub came up with [some design principles](https://ben.balter.com/2015/08/12/the-zen-of-github/) which they shared across all the teams to make sure that they were all aligned when building features for the platform. I liked the idea and drafted a list for Tuist. This is what I came up with:

- **Convention over configuration:** Build things to be convenient, not configurable. Configurability gives users the power to use the tool as they want, but also to screw things up without you being able to recover from it.

- **Design for failure:** Quoting Murphy: *"If things can go wrong, they will"*. Don't assume the happy path is valid path. Any scenario is handled, including errors, letting developers know about it at any time.

- **Make feedback actionable:** If things go wrong try to recover from it. In case you can't, let developers know what to do to get it working. There's a significant difference between `Couldn't find simulator`, and `Couldn't find the simulator because simctl was not found in the system. Make sure the Xcode installation is configured in your system with 'xcode-select -p'`

- **Simple is better than complex:** People don't use things if they are too complex. Developers don't want to touch a piece of code that has grown into a huge mess. Keep things simple.

- **Implementation details bring little value to users:** Users don't want to know how you are doing things internally, they just want you to do what they asked you for. Don't expose implementation details, like errors that you are thrown internally, because they don't care about that.

- **If it can't be reliable, you'd better not build it:** If a feature doesn't work as expected, users will have a negative perception of the tool. If you plan to build something, which can't be reliable, don't build it. Instead, do some groundwork to make it reliable or find another approach to address the same problem.

This is a malleable list which will change and grow as the project evolves. You can check out the [list](https://github.com/tuist/contributors/blob/master/Zen.md) on the [contributors repository](https://github.com/tuist/contributors)

> We implemented an endpoint, [api.tuist.io/zen](http://api.tuist.io/zen), that returns the project design principles.

## 🚀 What's coming

- 📃 **Documentation:** Unfortunately, We haven't devoted much time to have a good documentation for the project. That makes onboarding hard. We'll work on documenting the public interfaces and the CLI.
- 🚀 **Build, test, run actions:**  We'll work on providing a standard interface with the most common actions developers do when they interact with the projects. Once developers learn the interface, they'll be able to jump between one project to another seamlessly. 
- 🔀 **Static transitive dependencies:** Although Tuist supports dynamic transitive dependencies, it doesn't support static ones. We'd like to add support for that, allowing developers to specify whether they'd like to generate their dependencies to be static or dynamic.
- 🔑 **Certificate management:** A common source of frustration when building apps with Xcode is when you try to run the app on your device, or archive it for release, and you get a signing issue. We'd like to address that by setting up the environment and project with the right certificates, provisioning profiles and build settings.
- 🛒 **Releasing:** Once the app is ready for release, we'd like you to be able to archive and send the app to the store directly from Tuist with a single command that does all the heavy-lifting for you.

You can check out [the project issues](https://github.com/tuist/tuist/issues) that contains some other smaller improvements and features that are also coming to the project.

## 📒 Resources
- [Vision of the project](https://tuist.io/vision/)
- [Design principles](https://github.com/tuist/contributors/blob/master/Zen.md)
- [Contributing](https://github.com/tuist/contributors/blob/master/Contributing.md)

## ❤️ I need you
Tuist strives to build a healthy and supportive community that pushes the project forward. I'll keep pushing it because I'm self-motivated, but I'd love to do it with developers like you.

**We need feedback, ideas, bugs, code, and whatever you can imagine to make Tuist better**. I've built the project to be accessible and inclusive to make sure everyone has a voice and can participate on shaping Tuist. I planted the seed, but this tree 🌲 needs passionate gardeners.

Don't be afraid of getting involved with the project. If you have never done it before, [drop me a line](mailto:pedro@ppinera.es) and I'll be happy to get you onboard. If you are developer for Apple platforms you'll feel like at home working on this project because it's written in plain Swift, a programming language you might already be familiar with.


I can't wait to see how you use Tuist, and all the ideas that come out of it.

Happy Xcoding! ❤️👩‍💻