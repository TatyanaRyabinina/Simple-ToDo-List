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
import { getCurrentCategory } from '../actions/category.actions';
import { TODO_FORM } from '../constants/forms';
import SearchForm from './SearchForm';

class ToDoForm extends Component {
  componentWillMount() {
    const { getToDo, match, getCurrentCategory } = this.props;
    getToDo(match.params.id);
    getCurrentCategory(match.params.id);
  }
  render() {
    const { todos, handleSubmit, currentCategory } = this.props;
    return (
      <div>
        <SearchForm />
        <div className="form-group">
          <form onSubmit={handleSubmit} className="form-inline">
            <Field
              component={RenderField}
              type="text"
              name="todoName"
              placeholder="ToDo"
            />
            <div className="form-group">
              <button type="submit" className="btn btn-raised btn-primary">
                Add New ToDo Item
              </button>
            </div>
          </form>
          <h2 className="text-center">ToDo</h2>
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">{currentCategory} </h4>
            </div>
            <table>
              {todos.map((todo, index) => {
                return <ToDoItems key={todo.id} id={index + 1} todo={todo} />;
              })}
            </table>
          </div>
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
  getCurrentCategory: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
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
    todos: ToDosSelectors(state),
    currentCategory: state.currentCategory
  };
}

export default connect(
  mapStateToProps,
  {
    addToDo: addToDoActionCreator,
    getToDo,
    getCurrentCategory
  }
)(ToDoForms);
