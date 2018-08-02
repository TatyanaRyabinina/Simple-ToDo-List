import React from 'react';
import CategoryForm from '../containers/CategoryForm';
import SearchApp from './SearchApp';

const CategoryApp = () => {
  return (
    <div>
      <h2>Categories</h2>
      <SearchApp />
      <CategoryForm />
    </div>
  );
};

export default CategoryApp;
