---
title: 'Building Radiograph: A Hardware Monitoring App'
description: 'How I built Radiograph, a hardware monitoring tool that somehow ended up being installed on 65,000+ computers.'
pubDate: 2024-09-10
author: 'Leszek Pomianowski'
tags: ['radiograph', 'wpf', 'hardware-monitoring', 'microsoft-store', 'librehardwaremonitor']
---

I started Radiograph because I was frustrated with hardware monitoring tools. They all looked like they were built in 2005 and worked about as well. I wanted something that looked decent and gave me the information I needed without a computer science degree.

## Why I Built This

Most hardware monitoring apps fall into two camps. Either they're powerful but ugly, or they look okay but tell you nothing useful. I check temperatures regularly when I'm pushing my system. I got tired of squinting at tiny text and digging through confusing menus.

I had been working on WPF UI for a while, so it was a good chance to build something that looked at home on a modern Windows system. The plan was simple: make it work well, make it look good, and don't overcomplicate things.

## Building on Solid Foundations

For the monitoring itself, I used LibreHardwareMonitor. It does the heavy lifting of talking to your hardware and reading sensor data. I've contributed some improvements to it over time, mostly around SMBIOS handling for motherboard information.

The UI is built with WPF UI, which gives it the native Windows 11 look without me reinventing every control. It handles theming automatically, so the app follows you when you switch between light and dark mode.

## The Development Context

This project sits where several things I work on meet. The LibreHardwareMonitor contributions came from real needs while building Radiograph. WPF UI got better because I used it for actual applications. And having a successful Microsoft Store app has opened doors for other projects and collaborations.

Open source and practical app development feed each other. When people actually use what you build, you find problems and opportunities you'd never see while working on libraries in isolation.
