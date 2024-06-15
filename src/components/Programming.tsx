/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Programming extends PureComponent {
  public static displayName: string = Programming.name;

  public render(): JSX.Element {
    return (
      <div>
        <div className="page__wrapper -hmv-50 -bottom">
          <header className="-reveal">
            <span className="page__header">lepo.co</span>
            <h1 className="page__title">Programming</h1>
          </header>

          <div className="-reveal">
            <p>
              It doesn't make much sense to count what applications we create.
              Because you definitely need another. The key is what questions we
              will ask you. For what and for whom. Collecting precise data, we
              offer mathematically perfect solutions and get to work. This is
              the real art of increasing efficiency. In other words?
              Programming.
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
                  <h2>WPF UI</h2>
                  <span>fluent design system</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  Simple way to make your Windows 11 application written in WPF
                  keep up with modern design trends. Library changes the base
                  elements like Page, ToggleButton or List, and also includes
                  additional controls like Navigation, NumberBox, Dialog or
                  Snackbar.
                </p>
                <a
                  href="https://github.com/lepoco/wpfui"
                  target="_blank"
                  className="-black"
                  rel="noopener nofollow noreferrer">
                  Check it out on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner --gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>Radiograph</h2>
                  <span>hardware monitoring</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  Modern application that brings together all your favorite
                  tools in one place. Monitor your processor and graphics card,
                  check hard drives or network connection. Elegant, efficient
                  and easy to use.
                </p>
                <a
                  href="https://www.microsoft.com/en-us/p/radiograph/9nh1p86h06cg?activetab=pivot:overviewtab"
                  target="_blank"
                  className="-black"
                  rel="noopener nofollow noreferrer">
                  Download from Microsoft Store
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>Lepo.i18n</h2>
                  <span>internationalization and localization</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  Building applications requires an efficient way to quickly
                  translate both the UI and logic elements. Lepo.i18n offers
                  convenient translation with the use of YAML in combination
                  with C# and XAML language extensions.
                </p>
                <a
                  href="https://github.com/lepoco/i18n"
                  target="_blank"
                  className="-black"
                  rel="noopener nofollow noreferrer">
                  Check it out on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="banner --gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>WC-Poczta</h2>
                  <span>e-commerce with self-pickup</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  WC Poczta is a popular open-source plug for easy self pickup
                  which works for over a thousand online stores. Developed
                  together with the community, thanks to which it provides the
                  functions suited for many stores. The freedom of open-source
                  means you retain full ownership of your store’s content and
                  data forever.
                </p>
                <a
                  href="https://wordpress.org/plugins/wc-poczta/"
                  target="_blank"
                  className="-black"
                  rel="noopener nofollow noreferrer">
                  Check it out on WordPress
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
