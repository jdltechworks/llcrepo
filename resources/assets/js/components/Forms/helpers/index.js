import React from 'react'
import Dropzone from 'react-dropzone'
import eq from 'lodash/eq'
import { Field } from 'redux-form'
import pick from 'lodash/pick'

/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */


export const renderField = function(fieldConfig, field) {
    return(
        <Field key={field}
            type={fieldConfig.type}
            name={field} config={fieldConfig}
            component={FieldSetter}
            label={fieldConfig.label} />
    )
}


export const FieldSetter = function(_field) {

  let { meta, input, label, config, type } = _field
  const { rows } = config

  return (
    <div  className="form-group">
      <config.tag {...input} rows={rows} type={type} className="form-input" placeholder={label} />
      {meta.touched && meta.error ? <small>{meta.error}</small> : null}
    </div>
  )
}

export const TextArea = (_field) => {

}
