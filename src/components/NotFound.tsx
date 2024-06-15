/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class NotFound extends PureComponent {
  public static displayName: string = NotFound.name;

  public render(): JSX.Element {
    return (
      <div className="page__wrapper">
        <header className="-reveal">
          <span className="page__header">lepo.co</span>
          <h1 className="page__title">Page not found</h1>
          <p className="page__desc">
            The page you requested does not exist. I know you can be scared so
            let's <Link to="/">go home</Link>.
          </p>
        </header>
      </div>
    );
  }
}
