---
date: "2018-05-14"
title: "Dynamic project definition in Swift"
author: pedro
description: "In this post we explain how we leverage Swift and the compiler to offer dynamic and reusable project definition."
published: true
---

As we mentioned in our release blog post, one of the disadvantages of having the project definition codified into the Xcode projects is the fact that we cannot reuse parts of the project setup. While this is not an issue if you are working in a little project, as soon as it grows, you'll run into some maintenance difficulties. When we started working on xcbuddy, one of our main goals was to challenge Xcode standards and make reusability possible. We considered formats like [YAML](https://en.wikipedia.org/wiki/YAML), but although they allow a certain level of reusability within the same file, it wasn't enough for what Xcode projects need, **a more dynamic form of reusability**.

Luckily, a language which most of us enjoy using every day, and which empowers millions of apps would make this possible, [**Swift**](https://developer.apple.com/swift/). In this blog post I'll explain why we chose Swift for xcbuddy and dive into how it's used to provide dynamic and reusable project definition that enables users to use Xcode at scale.
