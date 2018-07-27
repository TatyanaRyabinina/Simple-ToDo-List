import React from 'react';
import '../public/style.css';

import ToDoForm from '../containers/ToDoForm';

const ToDoApp = () => {
  return (
    <div>
      <h2>Simple ToDo Form</h2>
      {<ToDoForm />}
    </div>
  );
};

export default ToDoApp;
