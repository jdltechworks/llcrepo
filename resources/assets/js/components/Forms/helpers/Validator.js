import each from 'lodash/each'

export const validator = (model) => {
  const errors = {}

  const validate = (values) => {
      each(model, (type, field) => {
        if(!values[field]) {
          errors[field] = `${field} is blank`
        }
      });
      return errors
  }
  return validate
}
