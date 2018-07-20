import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import validate from './validate';
import ToDoItems from './ToDoItems';
import { addTask as addTaskActionCreator } from './actions';
import style from './style.css';

const renderField = ({ input, type, meta: { touched, error } }) => {
  return (
    <div>
      <input {...input} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

const ToDoForm = props => {
  const { tasks, handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          component={renderField}
          type="text"
          name="newToDo"
          placeholder="Enter a todo item..."
        />
        <div>
          <input type="submit" value="Add New ToDo Item" />
        </div>
      </form>
      <table className="table">
        {tasks.map(function(task, index) {
          return <ToDoItems key={task.id} id={index + 1} task={task} />;
        })}
      </table>
    </div>
  );
};

ToDoForm.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      name: PropTypes.string
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired
};

renderField.propTypes = {
  input: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(
    PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string,
      warning: PropTypes.string
    })
  ).isRequired
};

const ToDoForms = reduxForm({
  form: 'todo',
  validate,
  onSubmit: (values, _, { addTask, reset }) => {
    addTask(values);
    reset('todo');
  }
})(ToDoForm);

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(
  mapStateToProps,
  { addTask: addTaskActionCreator }
)(ToDoForms);

// const x = (obj, dispatch) => Object.keys(obj).reduce((acc, actionCreatorFnName) => ({ [actionCreatorFnName]: (...args) => dispatch(obj[actionCreatorFnName](...args)) }), {})
