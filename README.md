# Description

This is an extension based on marks and points in emacs. You set a mark at one position, and then set a mark at another and the extension will automatically highlight the region. I'm eventually hoping to support more emacs features that have to do with marking such as rectangles but for now it's just a simple way for me to highlight with emacs keybindings.

The source code for the extension can be found at: https://github.com/ericmccarthy7/vs-code-mark-point

#Usage

The command is
```
extension.setMark
```

You can map it to any key you'd like. If you use emacs you'd probably map it to ctrl+space and then remap IntelliSense to something else.