import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import validate from '../validators/todo.validator';
import ToDoItems from './ToDoItems';
import RenderField from '../components/Field';
import {
  addToDo as addToDoActionCreator,
  getToDo
} from '../actions/todo.actions';
import { TODO_FORM } from '../constants/forms';

class ToDoForm extends Component {
  componentWillMount() {
    const { getToDo, match } = this.props;
    getToDo(match.params.id);
  }
  render() {
    const { todos, handleSubmit } = this.props;
    console.log(this.props.match);
    return (
      <div>
        <h2>Simple ToDo Form</h2>

        <form onSubmit={handleSubmit}>
          <Field component={RenderField} type="text" name="newToDo" />
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
      id: PropTypes.string,
      done: PropTypes.bool,
      todoName: PropTypes.string
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
