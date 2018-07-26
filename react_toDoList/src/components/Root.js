import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import ToDoApp from './ToDoApp';
import CategoryApp from './CategoryApp';

const Root = ({ store, history, persistor }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <div>
          <Route path="/todo" component={ToDoApp} />
          <Route path="/category" component={CategoryApp} />
        </div>
      </Router>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        done: PropTypes.bool,
        name: PropTypes.string
      })
    )
  }).isRequired
};

export default Root;
