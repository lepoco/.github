/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Courses extends PureComponent {
  public static displayName: string = Courses.name;

  public render(): JSX.Element {
    return (
      <div>
        <div className="page__wrapper -hmv-50 -bottom">
          <header className="-reveal">
            <span className="page__header">lepo.co</span>
            <h1 className="page__title">Courses</h1>
          </header>

          <div className="-reveal">
            <p>
              Elevate your skills with our expertly .NET designed courses,
              tailored for developers seeking to master the art of modern
              application development. From creating stunning desktop
              applications with WPF to building scalable, cloud-based solutions
              with ASP.NET, our courses offer in-depth knowledge, practical
              experience, and the tools you need to excel in your projects.
              Whether you're refining your expertise or exploring new
              technologies, our hands-on approach ensures you stay ahead in the
              ever-evolving world of software development. Dive into our courses
              and take your coding abilities to the next level.
            </p>
          </div>

          <div className="-reveal">
            <Link to="/contact">Write to us</Link>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>WPF Mastery</h2>
                  <span>building fluent desktop applications</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal courses-box">
                <p>
                  Unlock the full potential of Windows Presentation Foundation
                  (WPF) with our comprehensive course designed to elevate your
                  desktop application development skills. Whether you’re a
                  beginner or an experienced developer, this course will guide
                  you through the intricacies of creating sophisticated,
                  high-performance applications with rich user interfaces. Learn
                  how to leverage the powerful data binding capabilities,
                  customize controls, and implement MVVM architecture to craft
                  visually appealing and responsive applications. By the end of
                  this course, you’ll not only understand the core concepts but
                  also be equipped to build enterprise-level solutions that
                  enhance user experience and productivity.
                </p>
                <div>
                  <ul>
                    <li>
                      Master the MVVM (Model-View-ViewModel) pattern for clean
                      and maintainable code.
                    </li>
                    <li>
                      Deep dive into data binding, styling, and templating for
                      custom UI design.
                    </li>
                    <li>
                      Optimize your WPF applications for performance and
                      scalability.
                    </li>
                  </ul>
                </div>
                <Link to="/contact">Write to us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="banner --gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>ASP.NET Cloud Development</h2>
                  <span>scalable solutions for the modern web</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal courses-box">
                <p>
                  Step into the future of web development with our ASP.NET Cloud
                  Development course. Designed for developers looking to harness
                  the power of cloud computing, this course provides you with
                  the skills needed to create robust, scalable, and secure web
                  applications using ASP.NET Core and Microsoft Azure. Learn how
                  to build API-driven applications, implement microservices
                  architecture, and deploy your solutions in the cloud. Whether
                  you’re building a new application from scratch or migrating
                  existing systems to the cloud, this course equips you with the
                  best practices and tools to ensure your solutions are both
                  resilient and future-proof.
                </p>
                <div>
                  <ul>
                    <li>
                      Learn to develop and deploy ASP.NET Core applications in
                      the cloud.
                    </li>
                    <li>
                      Explore microservices architecture for modular and
                      scalable applications.
                    </li>
                    <li>
                      Integrate Domain-Driven Design to align software
                      architecture with business domains.
                    </li>
                  </ul>
                </div>
                <Link to="/contact">Write to us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
