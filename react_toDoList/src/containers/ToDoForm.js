import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import validate from '../validators/todo.validator';
import ToDoItems from './ToDoItems';
import ToDoField from '../components/Field';
import {
  addToDo as addToDoActionCreator,
  getToDo
} from '../actions/todo.actions';
import { TODO_FORM } from '../constants/forms';

class ToDoForm extends Component {
  componentDidMount() {
    const { getToDo } = this.props;
    getToDo();
  }
  render() {
    const { todos, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field component={ToDoField} type="text" name="newToDo" />
          <div>
            <input type="submit" value="Add New ToDo Item" />
          </div>
        </form>
        <table className="table">
          {todos.map((todo, index) => {
            return <ToDoItems key={todo.id} id={index + 1} todo={todo} />;
          })}
        </table>
      </div>
    );
  }
}

ToDoForm.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      done: PropTypes.bool,
      name: PropTypes.string
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getToDo: PropTypes.func.isRequired
};

const ToDoForms = reduxForm({
  form: TODO_FORM,
  validate,
  onSubmit: (values, _, { addToDo }) => addToDo(values)
})(ToDoForm);

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  {
    addToDo: addToDoActionCreator,
    getToDo
  }
)(ToDoForms);
