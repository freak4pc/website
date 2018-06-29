---
layout: page
title: FAQ
permalink: /fa/
---

### Why should I use xpm?

When Xcode projects and teams grow, the maintenance becomes burdensome, and developers spend quite a lot of time fighting issues. Some example of those issues are compilation failing because frameworks are not found, the linker complaining because the framework we are linking against is incompatible. xpm helps you overcome most of those issues by abstracting you away from certain knowledge that Xcode expects your developers to have. With xpm, **your developers can be focused on building the app, rather than setting up the environment and project properly to get Xcode happy about it**.

### What if xpm is not supported in the future?

Not supporting xpm in the future is as likely as Facebook not supporting React. Many things can happen and we can't make sure xpm exists forever. For that reason, we have designed xpm API in such way that your projects **depend weakly on it**. Your team is responsible for defining how the project should look, and xpm takes that input, and generates an Xcode project that follows standard conventions. In case of xpm not being maintained anymore, the generated project is a valid and standard project, which you can include in the git repository.

### How does xpm overlap with spm?

Swift Package Manager is the official tool from Apple for managing Swift packages. xpm is heavily inspired on the spm and has similar foundation. Many developers have been asking Apple for integration with Xcode project, but unfortunately, they don't seem to be taking any action. If they do, both tools will overlap, and you might feel tempted to replace xpm with spm. Since both are similar in design, the transition should be straightforward.
