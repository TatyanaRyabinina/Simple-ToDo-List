import React from 'react';
import PropTypes from 'prop-types';

const ToDoField = props => {
  const {
    input,
    type,
    meta: { touched, error }
  } = props;
  return (
    <div>
      <input {...input} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  );
};

ToDoField.propTypes = {
  input: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(
    PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string
    })
  ).isRequired
};

export default ToDoField;
