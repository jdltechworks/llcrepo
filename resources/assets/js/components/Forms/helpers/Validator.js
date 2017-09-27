import map from 'lodash/map'
import has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'

export const validator = (model) => {

  return (values) => {
      const errors = {};
      map(model, (type, field) => {
        if(!values[field]) {
          errors[field] = `${field} is blank`
        }
      });

      return errors;
  }
}
