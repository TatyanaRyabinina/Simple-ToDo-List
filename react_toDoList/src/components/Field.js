import React from 'react';
import PropTypes from 'prop-types';

const RenderField = props => {
  const {
    input,
    type,
    placeholder,
    meta: { touched, error }
  } = props;
  return (
    <div className="form-group">
      <input
        {...input}
        className="form-control mr-sm-2"
        type={type}
        placeholder={placeholder}
      />
      {touched && (error && <small className="text-muted">{error}</small>)}
    </div>
  );
};

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string
  }).isRequired,
  placeholder: PropTypes.string.isRequired
};

export default RenderField;
