import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import 'semantic-ui-css/semantic.min.css';
import Root from './containers/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { SpeechProvider } from '@speechly/react-client';

Sentry.init({
  dsn: 'https://5ae855d4c1d840c1b06679123069574f@sentry.io/1335198'
});

const store = configureStore();
const history = createBrowserHistory();
ReactDOM.render(
  <SpeechProvider appId="7e075e00-0408-4ed0-b3ed-9e634f85721b" language="en-US">
    <Root store={store} history={history} />
  </SpeechProvider>,
  document.getElementById('root')
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}

//wrap root with speechprovider
//refer to youtube 1.54.30

// Testing purposes
