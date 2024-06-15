/**
 * This Source Code Form is subject to the terms of the GNU GPL-3.0 License.
 * If a copy of the GPL-3.0 was not distributed with this file, You can obtain one at https://www.gnu.org/licenses/gpl-3.0.en.html.
 * Copyright (C) 2022 Leszek Pomianowski.
 * All Rights Reserved.
 */

import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
//import { ReactQueryDevtools } from 'react-query-devtools'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import './styles/app.scss';

const baseUrl: string =
  document.getElementsByTagName('base')[0].getAttribute('href') ?? '';

const queryClient = new QueryClient();

document.body.classList.remove('no-js');
document.body.classList.add('js');

ReactDOM.render(
  <Router basename={baseUrl}>
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <App />
        {/* <ReactQueryDevTools initialIsOpen={false}/> */}
      </QueryClientProvider>
    </Suspense>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// react-app-rewired build -p --mode=production

// @types/scrollreveal
// scrollreveal
