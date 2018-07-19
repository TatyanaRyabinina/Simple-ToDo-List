import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import SimpleForm from './ToDoForm';
import style from './style.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h2>Simple ToDo Form</h2>
      {<SimpleForm />}
    </div>
  </Provider>,
  document.getElementById('itemContainer')
);
