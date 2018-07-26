import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import Root from './components/Root';
import store from './store';
import './public/style.css';

const history = syncHistoryWithStore(createBrowserHistory(), store.store);

ReactDOM.render(
  <Root store={store.store} history={history} persistor={store.persistor} />,
  document.getElementById('root')
);
