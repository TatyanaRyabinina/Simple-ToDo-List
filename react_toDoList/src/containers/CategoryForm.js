import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import CategoriesSelectors from '../selectors/category.selectors';
import validate from '../validators/category.validator';
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
        <form onSubmit={handleSubmit} className="form-inline">
          <Field
            placeholder="Category"
            component={RenderField}
            id="newCategory"
            type="text"
            name="categoryName"
          />
          <div className="form-group">
            <button type="submit" className="btn btn-raised btn-primary">
              Add New Category
            </button>
          </div>
        </form>
        <h2 className="text-center">Categories</h2>
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
  validate,
  onSubmit: (values, _, { addCategory }) => addCategory(values)
})(CategoryForm);

function mapStateToProps(state) {
  return {
    categories: CategoriesSelectors(state)
  };
}

export default connect(
  mapStateToProps,
  {
    addCategory: addCategoryActionCreator,
    getCategory
  }
)(CategoryForms);
