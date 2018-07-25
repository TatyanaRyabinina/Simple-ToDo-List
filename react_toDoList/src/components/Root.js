import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        done: PropTypes.bool,
        name: PropTypes.string
      })
    )
  }).isRequired
};

export default Root;
