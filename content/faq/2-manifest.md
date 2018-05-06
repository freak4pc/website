---
order: 2
question: "Why are the manifests in Swift?"
---

First and foremost, because the manifest files like _Project.swift_ or _Workspace.swift_ can be **edited with Xcode**, which helps the developers validate the syntax using the Swift type system. It also prevents developers from **tweaking xcbuddy** in any way. This might change in the future, and there'll be support for hooks where developers will have the flexibility to define custom actions.
