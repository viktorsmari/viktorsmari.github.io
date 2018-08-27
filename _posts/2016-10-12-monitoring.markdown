---
title: Raspberry Pi motion detection
date: 2016-10-12 18:36:47 Z
categories:
- raspberry
- grafana
layout: post
---

I'm using a Raspberry Pi to post whenever it detects motion in my apartment. It also posts Temperature and Pressure (mbar).


*This graph is Grafana running in a Docker container locally, fetching data from a remote influxdb.*

![Munin](/assets/grafana_motion.png "Grafana motion")


