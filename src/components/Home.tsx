/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Matrix from './../common/Matrix';
import PointWave from '../common/PointWave';
import Typed from 'typed.js';

export class Home extends PureComponent {
  public static displayName: string = Home.name;

  public typed: Typed | null = null;

  public polygonElement: HTMLDivElement | null = null;

  public typedSpanElement: HTMLSpanElement | null = null;

  public matrixMarketing: HTMLSpanElement | null = null;

  public matrixReach: HTMLSpanElement | null = null;

  public componentDidMount() {
    this.printMatrix();
    this.printTyped();
    this.drawPolygon();
  }

  public componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    if (this.typed == null) return;

    this.typed.destroy();
  }

  private printMatrix(): void {
    if (this.matrixMarketing != null)
      Matrix.print(this.matrixMarketing, [
        'YouTube',
        'Instagram',
        'Facebook',
        'Pinterest',
        'LinkedIn',
      ]);

    if (this.matrixReach != null)
      Matrix.print(this.matrixReach, [
        '8 000 000',
        '27 000 000',
        '300 000',
        '570 000',
        '54 000',
      ]);
  }

  private printTyped(): void {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: ['', /*"I", "YOU", "WE",*/ 'WE MAKE THINGS'],
      cursorChar: '.',
      typeSpeed: 80,
      startDelay: 0,
      backDelay: 2000,
      smartBackspace: true,
      loop: false,
    };

    // this.el refers to the <span> in the render() method

    if (this.typedSpanElement == null) return;

    this.typed = new Typed(this.typedSpanElement, options);
  }

  private drawPolygon(): void {
    if (this.polygonElement == null) return;

    new PointWave(this.polygonElement);
  }

  public render(): JSX.Element {
    return (
      <div>
        <div
          className="polygon"
          ref={el => {
            this.polygonElement = el;
          }}>
          <div className="page__wrapper -hmv-100 -home">
            <header>
              <span className="page__header">lepo.co</span>
              <h1 className="page__title">
                <span
                  className="home-type"
                  // style={{ whiteSpace: 'pre' }}
                  ref={el => {
                    this.typedSpanElement = el;
                  }}></span>
              </h1>
              <span className="page__subtitle -home -blanked">together</span>
            </header>
            <picture>
              <source srcSet="img/sony.webp" type="image/webp" />
              <source srcSet="img/sony.webp" type="image/jpeg" />
            </picture>
          </div>
        </div>

        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>Content Marketing</h2>
                  <span
                    className="matrix-marketing"
                    ref={el => {
                      this.matrixMarketing = el;
                    }}></span>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  Spectacular content makes spectacular results. Instead of
                  creating empty needs, we build emotions. We know our recipient
                  and intensify our commitment. We operate, measure and analyze,
                  leaving space only for content that is effective. Did you know
                  there are 530 words on this page? Each of them tells you that
                  we know how. You just tell us what.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner --gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>Budgeree software</h2>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  It doesn't make much sense to count what applications we
                  create. Because you definitely need another. The key is what
                  questions we will ask you. For what and for whom. Collecting
                  precise data, we offer mathematically perfect solutions and
                  get to work. This is the real art of increasing efficiency. In
                  other words? Programming.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 -reveal">
                <div className="banner__title">
                  <h2>Cooperation</h2>
                </div>
              </div>
              <div className="col-12 col-lg-6 -reveal">
                <blockquote className="blockquote">
                  <p>
                    There is immense power when a group of people with similar
                    interests gets together to work toward the same goals.
                  </p>
                  <footer className="blockquote-footer">Idowu Koyenikan</footer>
                </blockquote>

                <div className="row">
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/reserved-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/hmd-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/philips-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/asus-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/raw-film-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/sezane-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/gearbest-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/orico-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/voopoo-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/twisto-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/red-phone-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <img
                      className="banner__brand"
                      src="img/brands/geekvape-logo-lepo.png"
                      height="35"
                      width="71"
                      loading="lazy"
                      alt="lepo.co cooperation brand"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page__wrapper -hmv-100 -flex-center">
          <div className="container">
            <div className="row">
              <div className="col-12 -reveal">
                <span className="page__header">lepo.co</span>
                <h1 className="page__title">
                  <span className="home-type">Contact</span>
                </h1>
              </div>
              <div className="col-12 col-lg-6"></div>
              <div className="col-12 col-lg-6 -reveal">
                <p>
                  Do you have a job for us? We are waiting for a message. Or
                  maybe you have any questions? Be sure to let us know. And if
                  you want to discuss whether you should cover the flakes with
                  milk or cover the milk with flakes, we are at your disposal.
                </p>
                <Link to="/contact">Write to us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}