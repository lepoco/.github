/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
// import { Link } from 'react-router-dom';

export class Support extends PureComponent {
  public static displayName: string = Support.name;

  private static readonly emailPartOne: string = 'sales';

  private static readonly emailPartTwo: string = 'lepo.co';

  componentDidMount() {
    // const emailElement = document.getElementById('email');
    // if (emailElement) {
    //   const email = `${Support.emailPartOne}@${Support.emailPartTwo}`;
    //   emailElement.innerHTML = `<a href="mailto:${email}">${email}</a>`;
    // }
  }

  handleClick = e => {
    e.preventDefault();

    window.location.href = 'mailto:sales@lepo.co';
  };

  public render(): JSX.Element {
    return (
      <div>
        <div className="page__wrapper -hmv-50 -bottom">
          <header className="-reveal">
            <span className="page__header">lepo.co</span>
            <h1 className="page__title">Support Plans</h1>
          </header>
          <div className="-reveal">
            <p>
              lepo.co is dedicated to ensuring our customers excel using our
              innovative open source solutions. We offer comprehensive support
              plans to provide you with expert guidance and assistance when
              developing systems with WPF UI, ReflectionEventing, and other
              lepo.co libraries. Whether you need help with modernizing your WPF
              applications or implementing decoupled event-driven designs, our
              tailored support solutions are here to meet your needs. Contact us
              to learn more or to discuss a custom support plan.
            </p>
          </div>
        </div>
        <div className="col-12 banner pricing-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-3">
                <div className="basic-pricing pricing-box">
                  <h2 className="pricing-title">Basic</h2>
                  <div className="pricing-view">
                    <div className="icon">
                      <img
                        src="img/balloon.png"
                        alt="hot-air-balloon"
                      />
                    </div>
                    <div className="pricing-cost">
                      <p className="pricing-amount">$199</p>
                      <p className="pricing-detail">per month*</p>
                    </div>
                  </div>
                  <div className="pricing-description">
                    <ul>
                      <li>Priority Email Support**</li>
                      <li>Dedicated channel (Discord)</li>
                      <li>Product Updates</li>
                      <li>Quarterly Webinars</li>
                      <li>Minor Customization Assistance</li>
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <button
                      className="btn btn-sm btn-block btn-outline-secondary"
                      type="button"
                      onClick={this.handleClick}>
                      Contact us
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="standard-pricing pricing-box">
                  <h2 className="pricing-title">Standard</h2>
                  <div className="pricing-view">
                    <div className="icon">
                      <img
                        src="img/plane.png"
                        alt="airplane"
                      />
                    </div>
                    <div className="pricing-cost">
                      <p className="pricing-amount">$499</p>
                      <p className="pricing-detail">per month*</p>
                    </div>
                  </div>
                  <div className="pricing-description">
                    <ul>
                      <li>Faster Response Time***</li>
                      <li>Dedicated channel (Discord)</li>
                      <li>Product Updates</li>
                      <li>Quarterly Webinars</li>
                      <li>Minor Customization Assistance</li>
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <button
                      type="button"
                      onClick={this.handleClick}
                      className="btn btn-sm btn-block btn-outline-secondary">
                      Contact us
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="business-pricing pricing-box">
                  <h2 className="pricing-title">Business</h2>
                  <div className="pricing-view">
                    <div className="icon">
                      <img
                        src="img/rocket.png"
                        alt="startup"
                      />
                    </div>
                    <div className="pricing-cost">
                      <p className="pricing-quote">individual quote</p>
                    </div>
                  </div>
                  <div className="pricing-description">
                    <ul>
                      <li>24/7 Priority Support</li>
                      <li>On-site Training</li>
                      <li>Exclusive Early Access</li>
                      <li>Dedicated channel (Discord)</li>
                      <li>Custom Development Support</li>
                    </ul>
                  </div>
                  <div className="pricing-button">
                    <button
                      className="btn btn-sm btn-block btn-outline-secondary"
                      type="button"
                      onClick={this.handleClick}>
                      Contact us
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-9 pricing-about">
                <div><small className="text-muted">* - With an annual subscription.</small></div>
                <div><small className="text-muted">** - Receive responses to your inquiries within 48 hours (working days).</small></div>
                <div><small className="text-muted">*** - Receive responses to your inquiries within 24 hours (working days).</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
