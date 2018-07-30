import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';

import ToDoApp from './ToDoApp';
import CategoryApp from './CategoryApp';
import ToDoForm from '../containers/ToDoForm';

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/categories" component={CategoryApp} />
          <Route path="/categories/:id/todos" component={ToDoForm} />
        </div>
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
