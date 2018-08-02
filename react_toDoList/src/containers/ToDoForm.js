import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import ToDosSelectors from '../selectors/todo.selectors';
import validate from '../validators/todo.validator';
import ToDoItems from './ToDoItems';
import RenderField from '../components/Field';
import {
  addToDo as addToDoActionCreator,
  getToDo
} from '../actions/todo.actions';
import { TODO_FORM } from '../constants/forms';
import SearchApp from '../components/SearchApp';

class ToDoForm extends Component {
  componentWillMount() {
    const { getToDo, match } = this.props;
    getToDo(match.params.id);
  }
  render() {
    const { todos, handleSubmit } = this.props;
    return (
      <div>
        <h2>Simple ToDo Form</h2>
        <SearchApp />
        <div>
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
  getToDo: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const ToDoForms = reduxForm({
  form: TODO_FORM,
  validate,
  onSubmit: (values, _, { addToDo, match }) =>
    addToDo({ ...values, categoryId: match.params.id })
})(ToDoForm);

function mapStateToProps(state) {
  return {
    todos: ToDosSelectors(state)
  };
}

export default connect(
  mapStateToProps,
  {
    addToDo: addToDoActionCreator,
    getToDo
  }
)(ToDoForms);
