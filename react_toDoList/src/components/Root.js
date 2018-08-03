import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';

import CategoryApp from './CategoryApp';
import ToDoForm from '../containers/ToDoForm';
import 'bootstrap-material-design';

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/categories" component={CategoryApp} />
          <Route path="/categories/:id/todos" component={ToDoForm} />
          <Redirect from="/" to="categories" />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object,
  persistor: PropTypes.object
};

export default Root;
