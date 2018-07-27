import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import CategoryItems from './CategoryItems';
import RenderField from '../components/Field';
import {
  addCategory as addCategoryActionCreator,
  getCategory
} from '../actions/category.actions';
import { CATEGORY_FORM } from '../constants/forms';

class CategoryForm extends Component {
  componentDidMount() {
    const { getCategory } = this.props;
    getCategory();
  }
  render() {
    const { categories, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <Field component={RenderField} type="text" name="newToDo" />
          <div>
            <input type="submit" value="Add New ToDo Item" />
          </div>
        </form>
        <table className="table">
          {categories.map((category, index) => {
            return (
              <CategoryItems
                key={category.categoryId}
                id={index + 1}
                category={category}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

CategoryForm.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired
};

const CategoryForms = reduxForm({
  form: CATEGORY_FORM,
  //validate,
  onSubmit: (values, _, { addCategory }) => addCategory(values)
})(CategoryForm);

function mapStateToProps(state) {
  return {
    categories: state.categories
  };
}

export default connect(
  mapStateToProps,
  {
    addCategory: addCategoryActionCreator,
    getCategory
  }
)(CategoryForms);
