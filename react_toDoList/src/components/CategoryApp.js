import React from 'react';
import CategoryForm from '../containers/CategoryForm';
import SearchForm from '../containers/SearchForm';

const CategoryApp = () => {
  return (
    <div>
      <h2>Categories</h2>
      <SearchForm />
      <CategoryForm />
    </div>
  );
};

export default CategoryApp;
