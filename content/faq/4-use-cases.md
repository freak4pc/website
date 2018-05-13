---
question: "When should I use xcbuddy?"
---

When your project/team starts growing, and you struggle to maintain the project's setup. Maintaining an Xcode project with a few targets is easy, but maintaining multiple Xcode projects, schemes, and targets is a pain in the ass and a significant source of errors. Although Xcode helps a bit by allowing reusing build settings using _.xcconfig_ files there's no such option for other projects' components like schemes, or targets build phases. A clear example of how cumbersome maintenance can be is when you add a new dynamic framework dependency and you have to update a bunch of targets to embed that framework into the products. xcbuddy handles all that for you, **making the right configuration decisions**, and alerting you when your configuration might cause compilation issues.
