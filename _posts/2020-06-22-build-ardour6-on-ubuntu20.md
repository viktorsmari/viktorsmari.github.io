---
title: How to build Ardour 6 on Ubuntu 20
date: 2020-06-22 15:36:47 Z
layout: post
---

# Build Ardour 6 on Ubuntu 20.04

This is how you build Ardour 6 on Ubuntu 20.

If you simply want to install it, you can download it and pay as little as 1$ directly on the
[Ardour website](https://community.ardour.org/download){:target="_blank"}


## Step by step instructions

1. Clone the repo

   `git clone https://github.com/ardour/ardour`

2. Install the dependencies

   ```shell
   sudo apt install -y \
   libboost-all-dev gcc g++ pkg-config libasound2-dev libgtk2.0-dev \
   libsndfile1-dev libcurl4-nss-dev libarchive-dev liblo-dev libtag1-dev \
   vamp-plugin-sdk librubberband-dev libfftw3-dev libaubio-dev libxml2-dev \
   lv2-dev libserd-dev libsord-dev libsratom-dev liblilv-dev libgtkmm-2.4-dev
   ```

   ```shell
   sudo apt-get install -y \
   libglibmm-2.4-dev libusb-1.0-0-dev libpangomm-1.4-dev libsamplerate0-dev \
   libcunit1-dev libcppunit-dev libudev-dev libserd-0-0 libcwiid-dev \
   libxwiimote-dev libwebsocketpp-dev libwebsockets-dev \
   libsratom-0-0 liblrdf0 liblrdf0-dev
   ```

   Based on an answer of mine from [Ask Ubuntu](https://askubuntu.com/questions/1020879/building-ardour-5){:target="_blank"}

3. Build Ardour 6

   ```shell
   ./waf configure
   ./waf
   ./waf install
   ```


**And you are done!**

For more detail see:  
[http://ardour.org/building_linux.html](http://ardour.org/building_linux.html){:target="_blank"}


# Build the Ardour version your package manager supports

If for some reason you want to build the version that your package manager has, which will probably not be the newest version,
there is a quick way to install the dependencies for that.

You can check which version your package manager has:

```shell
apt-cache policy ardour
```

In my case that is 5.12:

>   Candidate: 1:5.12.0-3ubuntu4


By using the `apt build-dep` command, we can install all the packages required to build the package locally.

> build-dep causes apt-get to install/remove packages in an attempt to satisfy the build dependencies for a source package.
> By default the dependencies are satisfied to build the package natively.

```shell
apt build-dep ardour
```

Then do the same `./waf` commands as listed above.
