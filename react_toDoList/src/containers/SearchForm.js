import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {
  search as searchActionCreator,
  clearSearch as clearSearchActionCreator
} from '../actions/search.actions';
import RenderField from '../components/Field';
import { SEARCH_FORM } from '../constants/forms';
import SearchSelectors from '../selectors/search.selectors';

const SearchForm = props => {
  const { handleSubmit, clearSearch, reset } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field component={RenderField} type="text" name="search" />
        <div>
          <input type="submit" value="Search" />
          <input
            type="button"
            value="Clear"
            onClick={() => {
              clearSearch();
              reset(SEARCH_FORM);
            }}
          />
        </div>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

const SearchForms = reduxForm({
  form: SEARCH_FORM,
  onSubmit: (values, _, { search }) => search(values.search)
})(SearchForm);

function mapStateToProps(state) {
  return {
    search: SearchSelectors(state)
  };
}

export default connect(
  mapStateToProps,
  {
    search: searchActionCreator,
    clearSearch: clearSearchActionCreator
  }
)(SearchForms);
