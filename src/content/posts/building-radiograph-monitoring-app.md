---
title: 'Building Radiograph: A Hardware Monitoring App'
description: 'How I built Radiograph, a hardware monitoring tool that somehow ended up being installed on 65,000+ computers.'
pubDate: 2024-09-10
author: 'Leszek Pomianowski'
tags: ['radiograph', 'wpf', 'hardware-monitoring', 'microsoft-store', 'librehardwaremonitor']
---

I started working on Radiograph because I was frustrated with hardware monitoring tools. They all looked like they were built in 2005 and worked about as well. I wanted something that actually looked decent and gave me the information I needed without making me feel like I needed a computer science degree to understand it.

## Why I Built This

Most hardware monitoring applications fall into two categories: either they're incredibly powerful but look terrible, or they look okay but don't tell you anything useful. I use these tools regularly to keep an eye on temperatures when I'm pushing my system, and I got tired of interfaces that made me squint to read tiny text or navigate through confusing menus.

I had been working on WPF UI for a while, and it seemed like a good opportunity to build something that actually looked like it belonged on a modern Windows system. The plan was simple: make it work well, make it look good, and don't overcomplicate things.

## Building on Solid Foundations

For the core monitoring functionality, I used LibreHardwareMonitor. This library does the heavy lifting of actually talking to your hardware and getting sensor data. I've contributed some improvements to it over time, particularly around SMBIOS handling for motherboard information.

The UI is built with WPF UI, which gives it that native Windows 11 look without me having to reinvent every control. It handles the theming automatically, so if you switch between light and dark mode, the app just follows along.

## The Development Context

This project sits at the intersection of several things I work on. The LibreHardwareMonitor contributions came from real needs while building Radiograph. The WPF UI library got better because I was using it to build actual applications. And having a successful Microsoft Store app has opened doors for other projects and collaborations.

It's a good example of how open source development and practical application development can reinforce each other. Building something people actually use reveals problems and opportunities that you don't see when just working on libraries in isolation.
