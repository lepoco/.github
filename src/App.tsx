/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { Route, Routes } from 'react-router-dom';
import RoutedComponent from './common/RoutedComponent';
import withRouter from './common/withRouter';

import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Marketing } from './components/Marketing';
import { Programming } from './components/Programming';
import { NotFound } from './components/NotFound';

class App extends RoutedComponent {
  public static displayName: string = App.name;

  public render(): JSX.Element {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/programming" element={<Programming />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
}

export default withRouter(App);
