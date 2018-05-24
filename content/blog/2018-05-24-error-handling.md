---
date: "2018-05-14"
title: "Error handling in command line tools"
author: pedro
description: "In this blog post I describe the approach that we have taken for xcbuddy to handle errors and provide users with useful insights about them when they arise suring the execution of the tool."
published: false
---

When designing command line tools, like xcbuddy, it's very important to take care over the output that it prints in the terminal. Compared to mobile apps, where the user has multiple visual elements that provide feedback about what's going on, there's only a single feedback channel, the standard output. For that reason, it's very important that **whatever we print there is concise and valuable for the user**.

In my experience using other command line tools, something that annoyed me the most was getting errors that were not properly handled. As you might know, when an error which is not handled blows up, it causes your program to exit and print a stacktrace and a bunch of other data that is irrelevant to the user. We often talk about apps that have a good UX, but command line tools are also apps, so **having a bad UX is a signal of a badly designed and developed tool that developers might not want to use**.

How many times have you come across a `nil` value in code, or an unexpected condition and you assumed it'd never happen rather than handling it properly? How many times have you force-unwrapped variables in Swift asuming the value would always be there? When we come accross those situations, there's a lazy developer inside us that tells us to continue writing the happy path of our code instead of writing some code to handle those uncommon scenarios. We end up forgetting and not even testing them. Something being unlikely doesn't mean that it cannot happen, it can but less frequently.

When we worked on xcubddy, error handling was a crucial piece of the project to be taken care of. We didn't want it to be a thing to be improved in the future, but rather **having a proper error handling mechanism built-in**, so that developers could have a nice experience using the tool from day zero. In this article I'll describe the approached that we followed, and what we do when errors are thrown from anywhere during the execution.

> I'd like to give some credit to some of my colleagues at Shopify and the worked that they did on command line tool because it was a great source of inspiration to design the error handling strategy for xcbuddy.

## Aborts and bugs

Swift as a language has already built-in error handling features. You can annotate your methods as _throwing methods_ and catch any thrown method by wrapping it in a `do { } catch { }` clause. Those annotations tell us that there's an error that needs to be handled but it doesn't tell us exactly which types of errors we are getting. Since there are some internal details that we'd need to know to handle those errors properly we often end up _ignoring_ and propagating them up. **someone will handle it somewhere**. Unfortunately, most of the times they are not handled properly resulting on log messages useless for the developers of your tool.

In xcbuddy, we extended the protocol-oriented Swift approach for error handling adding some extra properties that are used to determine two things:

* How should those bugs be presented to the user.
* How should those bugs be reported to an error tracking service/platform.

We defined a protocol, `FatalError`, which conforms to `Error` and `CustomStringConvertible`, and requires errors to include a property called `type` that specifies the kind of errror being thrown. Any error in the project should conform to this protocol instead of the plain `Error`:

```swift
enum ErrorType {
  case abort
  case abortSilent
  case bug
  case bugSilent
}
protocol FatalError: Error, CustomStringConvertible {
  var type: ErrorType { get }
}
```
