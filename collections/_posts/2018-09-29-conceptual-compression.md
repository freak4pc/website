---
layout: post
title:  "Conceptual compression"
date:   2018-09-05
categories: philosophy values design
excerpt: Tuist was oficially released. Read more on this blog post about what motivated us to build Tuist and how it can help you scale your Xcode projects.
author: pepibumur
---

I came across [this talk]() from DHH, the creator of Ruby on Rails, and it resonated at lot with the work that we are doing with Tuist. Even if you are not a Ruby or a Rails developer I think is a talk worth watching. In the talk he explores a concept that I'd never heard before, **conceptual compression**. 

DHH started building Rails motivated by how complex building a web app was at that time. There was a lot of low-level knowledge and complexities one needed to know about and deal with, that building a web app was a tedious process. When I use the framework these days, I'm impressed by the level of abstraction that it has. 99% of the times, I don't need to know about SQL queries, defining database migrations, or generating HTTP responses, and if I need to, there's an API to go low-level and deal with the complexities myself. Rails *conceptually compresses* all those things, saving you some time, and making your experience building web apps nicer.

I'm jealous that there isn't a thing like Rails for developers that work with Xcode, which inevitably, exposes a lot of complexity. [CocoaPods](https://cocoapods.org) or the [Swift Package Manager](https://github.com/apple/swift-package-manager) are great examples of tools that conceptually compress the complexity associated to dependencies and packages management. Unfortunately, their scope is limited to dependencies management and we can't use them to abstract the type of complexity developers deal with in a daily basis.

In this post, I'll explore where the complexity comes from, talk about why it exists, and the role Tuist plays in conceptually compressing it. 

## Complexity

## Why is there inherent complexity?
The complexity of 