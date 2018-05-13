---
question: "Is it compatible with Fastlane?"
---

xcbuddy **is compatible** with any automation toolchain that uses Xcode projects and the _xcodebuild_ command. You might need to modify your _Fastfiles_ to execute a _pre_ step that generates the Xcode project that _Fastlane_ will use.
