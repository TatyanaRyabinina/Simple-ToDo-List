import React from 'react';

import ToDoForm from '../containers/ToDoForm';

const ToDoApp = props => {
  console.log(props);
  return (
    <div>
      <h2>Simple ToDo Form</h2>
      {<ToDoForm />}
    </div>
  );
};

export default ToDoApp;
