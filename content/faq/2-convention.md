---
question: "Why can't I specify my own frameworks build phases?"
---

One of xcbuddy's main principles is **convention over configuration**. xcbuddy aims to remove any configuration implicitness that could lead to compilation issues. Linking and embedding libraries and frameworks is an example of such implicitness. xcbuddy provides an abstraction through the manifest layer that simplifies configuration and allows catching issues early. Although we've tried to make it as flexible as possible, you might come across scenarios where the abstraction is not enough for your requirements. In those cases, don't hesitate to open an issue on the project to discuss potential API improvements.