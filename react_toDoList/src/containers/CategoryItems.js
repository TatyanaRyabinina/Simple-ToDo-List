import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteCategory as deleteCategoryActionCreator } from '../actions/category.actions';

const CategoryItems = props => {
  const { id, category } = props;
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>
          <Link to={`/categories/${category.categoryId}/todos`}>
            {category.categoryName}
          </Link>
        </td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.deleteCategory({ id: category.categoryId })}
          />
        </td>
      </tr>
    </tbody>
  );
};

CategoryItems.propTypes = {
  category: PropTypes.shape({
    categoryId: PropTypes.string,
    categoryName: PropTypes.string
  }).isRequired,
  id: PropTypes.number.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCategory: deleteCategoryActionCreator }
)(CategoryItems);
