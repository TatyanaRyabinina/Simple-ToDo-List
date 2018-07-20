import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  newToDo: Yup.string()
    .required('ToDo is required!')
    .min(5, 'ToDo must be at least 5 characters!')
    .matches(/^[a-zA-Z0-9]+$/, 'Not valid!')
});

const validate = values => {
  let errors = {};

  try {
    validationSchema.validateSync(values, { returnError: true });
  } catch (error) {
    errors[error.path] = error.message;
  }
  return errors;
};

export default validate;
