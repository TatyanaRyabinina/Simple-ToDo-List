import React from 'react';
import PropTypes from 'prop-types';

const RenderField = props => {
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

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.objectOf(
    PropTypes.shape({
      touched: PropTypes.bool.isRequired,
      error: PropTypes.string
    })
  ).isRequired
};

export default RenderField;
