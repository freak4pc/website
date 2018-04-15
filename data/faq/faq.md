## Why xcbuddy?

Plainly, because it's a buddy that helps you with Xcode.

## How does it differ from the Swift Package Manager?

Although xcbuddy has many things in common with SPM, like the command line interface, the manifest definition in Swift, or the project generation, xcbuddy focuses on scaling Xcdoe projects, rather than doing dependency resolution and helping developers implement tools in Swift. SPM's responsibility might overlap more with xcbuddy's in the future since there seems to be plans to give support to other platforms such as iOS.

## Why are the manifests in Swift?

First and foremost, because the manifest files like `Project.swift` or `Workspace.swift` can be edited with Xcode, which helps the developers validate the syntax using the Swift type system. It also prevents developers from tweaking xcbuddy in any way. This might change in the future, and there'll be support for hooks where developers will have the flexibility to define custom actions.

## When should I use xcbuddy?

When your project/team starts growing, and you struggle to maintain the project's setup. Maintaining an Xcode project with a few targets is easy, but maintaining multiple Xcode projects, schemes, and targets is a pain in the ass and a significant source of errors. Although Xcode helps a bit by allowing reusing build settings using `.xcconfig` files there's no such option for other projects' components like schemes, or targets build phases. A clear example of how cumbersome maintenance can be is when you add a new dynamic framework dependency and you have to update a bunch of targets to embed that framework into the products. xcbuddy handles all that for you, making the right configuration decisions, and alerting you when your configuration might cause compilation issues.

## What if we want to stop using it in the future for whatever reason?

One of the xcbuddy's core values is to be as aligned as possible to what developers are used to with Xcode. That's why xcbuddy doesn't replace the build system or doesn't make decisions about your workspace/projects/targets structure. The tool just leverages the dynamism of project generation to offer you nice productivity-focus features. In case you'd like to stop using xcbuddy, you could generate the Xcode projects, include them in your repository, and use your own automation scripts or tools like Fastlane.

## Why isn't the tool open source?

This is a decision still to be made. We'de like to first mature the tool and come up with a clear vision that we can share with you. After that, we'll evaluate whether we'll make the tool open source, or just some components it that the community can benefit from.
