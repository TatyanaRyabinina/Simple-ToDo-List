import React, { Component } from 'react';

import SimpleForm from './ToDoForm';
import style from '../style.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Simple ToDo Form</h2>
        {<SimpleForm />}
      </div>
    );
  }
}

export default App;
