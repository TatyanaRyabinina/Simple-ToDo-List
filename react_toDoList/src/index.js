import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import store from './store';

ReactDOM.render(
  <Root
    store={store.store}
    history={store.history}
    persistor={store.persistor}
  />,
  document.getElementById('root')
);
