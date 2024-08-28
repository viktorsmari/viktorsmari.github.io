---
title: i3 Window Manager vs Slate
date: 2024-8-11 15:36:47 Z
layout: post
---

i3 window manager vs Slate on Ubuntu 24.04

I have been using Ubuntu since 2013 and the i3 window manager since 2014.

When I tried i3 for the first time it felt like "home".
I had tried a bunch of different Ubuntu desktops like Kubuntu, Lubuntu, Xubuntu and more.
Finally I was using a window manager that was not in my way. I felt like I was more productive and faster getting my thoughts out.

I like to update and try new things to see if they help with productivity or make things easier or simpler.

I tried Slate because it is using Wayland and should be faster and better replacement for i3.


## Good parts:

The configuration for monitors can now live in the config and is quite simple.
```
output HDMI-A-2 pos 0 0 res 1920x1080
output HDMI-A-1 pos 1920 0 res 2560x1440
```


My keyboard config is also simple

```
input "type:keyboard" {
  xkb_options "caps:escape,grp:alt_shift_toggle"
  xkb_layout "us,is"
  repeat_rate 30
  repeat_delay 250
  xkb_numlock enabled
}
```

Then I had to find alternative programs for taking screenshots.
I used grim, grimshot, slurp and wl-copy which worked really well.


## Problems
1. I could not share the **whole** screen, only one application window.
This made it tricky because I often share a browser window and a terminal, side by side.

2. I could not record the screen easily. I spent some time on researching this but had constant issues.
I tried using OBS, but I did not get it working to record the screen with Wayland.
I could not add the 'Screen Capture (XSHM)'

## Conclusion
I used Slate for 2-3 months and then I went back to i3.
Slate works fine, but Wayland is not ready for me yet, as of 2024

I personally did not notice that Slate was faster i3 on my computer, but I needed the screen sharing and recording to work properly, so I went back to i3, for now.

