/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class Marketing extends PureComponent {
  public static displayName: string = Marketing.name;

  public render(): JSX.Element {
    return (
      <div className="page__wrapper">
        <header className="-reveal">
          <span className="page__header">lepo.co</span>
          <h1 className="page__title">Marketing</h1>
        </header>

        <div className="-reveal">
          <p>
            Spectacular content makes spectacular results. Instead of creating
            empty needs, we build emotions. We know our recipient and intensify
            our commitment. We operate, measure and analyze, leaving space only
            for content that is effective. Did you know there are 530 words on
            this page? Each of them tells you that we know how. You just tell us
            what.
          </p>
        </div>

        <div className="-reveal">
          <Link to="/contact">Write to us</Link>
        </div>
      </div>
    );
  }
}
