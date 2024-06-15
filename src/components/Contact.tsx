/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';

export class Contact extends PureComponent {
  public static displayName: string = Contact.name;

  public render(): JSX.Element {
    return (
      <div className="page__wrapper">
        <header className="-reveal">
          <span className="page__header">lepo.co</span>
          <h1 className="page__title">Contact</h1>
        </header>

        <p>
          Hi, I am Leszek ([ˈlɛʂɛk]), a developer from Poland. For over 10 years
          I've been learning how to create fun things using code and trying to
          share my work with others. If you want to contact me about one of my
          open-source solutions, or want to collaborate write to me at:
          <br />
          <i>support (at) lepo.co</i>
        </p>

        {/* <form id="signIn" className="-mt-5">
          <input type="hidden" name="action" value="SignIn" />
          <input type="hidden" name="nonce" value="signIn" />
          <div className="-mb-1">
            <div className="floating-input -reveal">
              <input
                className="floating-input__field"
                type="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="-mb-1">
            <div className="floating-input -reveal">
              <input
                className="floating-input__field"
                type="text"
                name="message"
                placeholder="Message"
              />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="-reveal -pb-1">
            <button type="submit" className="a">
              Send
            </button>
          </div>
        </form> */}
      </div>
    );
  }
}
