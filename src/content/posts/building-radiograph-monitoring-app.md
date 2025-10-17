---
title: 'Building Radiograph: A Hardware Monitoring App'
description: 'How I built Radiograph, a hardware monitoring tool that somehow ended up being installed on 65,000+ computers.'
pubDate: 2024-09-10
author: 'Leszek Pomianowski'
image: 'https://store-images.s-microsoft.com/image/apps.31175.9NH1P86H06CG.baa9b5c0-2c6c-4b8e-9e3c-ce0c7b0ed70b.cf87bea0-a18f-431a-b1e3-6de44421b1d4'
tags: ['radiograph', 'wpf', 'hardware-monitoring', 'microsoft-store', 'librehardwaremonitor']
---

I started working on Radiograph because I was frustrated with hardware monitoring tools. They all looked like they were built in 2005 and worked about as well. I wanted something that actually looked decent and gave me the information I needed without making me feel like I needed a computer science degree to understand it.

## Why I Built This

Most hardware monitoring applications fall into two categories: either they're incredibly powerful but look terrible, or they look okay but don't tell you anything useful. I use these tools regularly to keep an eye on temperatures when I'm pushing my system, and I got tired of interfaces that made me squint to read tiny text or navigate through confusing menus.

I had been working on WPF UI for a while, and it seemed like a good opportunity to build something that actually looked like it belonged on a modern Windows system. The plan was simple: make it work well, make it look good, and don't overcomplicate things.

## Building on Solid Foundations

For the core monitoring functionality, I used LibreHardwareMonitor. This library does the heavy lifting of actually talking to your hardware and getting sensor data. I've contributed some improvements to it over time, particularly around SMBIOS handling for motherboard information.

The UI is built with WPF UI, which gives it that native Windows 11 look without me having to reinvent every control. It handles the theming automatically, so if you switch between light and dark mode, the app just follows along.

## What It Actually Does

Radiograph monitors the stuff you'd expect: CPU and GPU temperatures, fan speeds, memory usage, network activity. It shows you system information like what BIOS version you're running and what hardware you have installed.

The interface shows critical information prominently - if something's running hot, you'll notice it. For day-to-day use, there's a clean overview that doesn't overwhelm you with numbers you don't need. If you want details, they're there, but they don't get in the way.

```csharp
// The monitoring setup is straightforward
public class TemperatureMonitor
{
    private Computer computer;
    
    public void Initialize()
    {
        computer = new Computer
        {
            IsCpuEnabled = true,
            IsGpuEnabled = true,
            IsMotherboardEnabled = true
        };
        
        computer.Open();
    }
    
    public void UpdateTemperatures()
    {
        computer.Accept(new UpdateVisitor());
        
        foreach (var hardware in computer.Hardware)
        {
            foreach (var sensor in hardware.Sensors)
            {
                if (sensor.SensorType == SensorType.Temperature)
                {
                    UpdateTemperatureDisplay(sensor.Name, sensor.Value);
                }
            }
        }
    }
}
```

## Performance and Compatibility

The tricky part with hardware monitoring is balancing accuracy with performance. You don't want a monitoring tool that slows down your system just to tell you how your system is performing. I spent time optimizing the update intervals and making sure the app only polls sensors that are actually visible.

```csharp
// Smart updates based on what's visible
public class OptimizedMonitoringService
{
    private Timer updateTimer;
    private readonly TimeSpan updateInterval = TimeSpan.FromSeconds(1);
    
    public void StartMonitoring()
    {
        updateTimer = new Timer(UpdateCallback, null, TimeSpan.Zero, updateInterval);
    }
    
    private void UpdateCallback(object state)
    {
        if (IsApplicationVisible())
        {
            UpdateVisibleSensors();
        }
        else
        {
            UpdateCriticalSensorsOnly();
        }
    }
}
```

Getting it to work across different hardware configurations was another challenge. Every manufacturer does things slightly differently, and some older systems have quirks. The LibreHardwareMonitor library handles most of this, but there are always edge cases that real users find that testing can't cover.

## Real-World Results

Radiograph has been available on the Microsoft Store since May 2020. As of now, it has about 65,000 installations and maintains a 4.7-star rating based on 866 reviews. It's categorized under Developer Tools, though it gets used by a pretty wide range of people.

The feedback has been generally positive. People seem to appreciate that it doesn't look like it was designed in the early 2000s, and the automatic theme switching is something that gets mentioned a lot in reviews.

## What I Learned

Building and maintaining Radiograph taught me a few things about desktop software development:

Users care about visual design more than I initially thought. The functionality could be identical to other monitoring tools, but the modern interface makes a real difference in how people perceive and use the application.

Microsoft Store distribution actually works pretty well for this type of utility. The automatic updates and built-in trust from being in the store seem to matter to users, especially for system-level tools.

Contributing to the libraries you depend on creates a positive feedback loop. The SMBIOS improvements I made to LibreHardwareMonitor came directly from issues I encountered building Radiograph, and now other applications benefit from those fixes.

## Future Plans

I'm working on some improvements for future versions: better historical data tracking, more detailed alerting options, and keeping up with the latest .NET and WPF UI improvements.

The goal remains the same: keep it useful without making it complicated. There are plenty of monitoring tools that do everything imaginable, but I think there's value in something that does the important stuff well and stays out of your way.

If you want to try it out, you can find Radiograph on the Microsoft Store. It requires Windows 10 version 17763.0 or higher and uses about 170 MB of disk space.

## The Development Context

This project sits at the intersection of several things I work on. The LibreHardwareMonitor contributions came from real needs while building Radiograph. The WPF UI library got better because I was using it to build actual applications. And having a successful Microsoft Store app has opened doors for other projects and collaborations.

It's a good example of how open source development and practical application development can reinforce each other. Building something people actually use reveals problems and opportunities that you don't see when just working on libraries in isolation.
