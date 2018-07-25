import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import validate from '../validators/validate';
import ToDoItems from './ToDoItems';
import ToDoField from '../components/Field';
import {
  addTask as addTaskActionCreator,
  getTask
} from '../actions/todo.actions';

class ToDoForm extends Component {
  componentDidMount() {
    const { getTask } = this.props;
    getTask();
  }
  render() {
    const { tasks, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field component={ToDoField} type="text" name="newToDo" />
          <div>
            <input type="submit" value="Add New ToDo Item" />
          </div>
        </form>
        <table className="table">
          {tasks.map((task, index) => {
            return <ToDoItems key={task.id} id={index + 1} task={task} />;
          })}
        </table>
      </div>
    );
  }
}

ToDoForm.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      name: PropTypes.string
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getTask: PropTypes.func.isRequired
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
  {
    addTask: addTaskActionCreator,
    getTask
  }
)(ToDoForms);

// const x = (obj, dispatch) => Object.keys(obj).reduce((acc, actionCreatorFnName) => ({ [actionCreatorFnName]: (...args) => dispatch(obj[actionCreatorFnName](...args)) }), {})
