import React from 'react'
import Dropzone from 'react-dropzone'
import eq from 'lodash/eq'
import { Field } from 'redux-form'
import pick from 'lodash/pick'
import ReCAPTCHA from 'react-google-recaptcha'
/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */

let CustomField = (props) => {
    const { config, input, meta } = props
    const fields = {
        captcha: <ReCAPTCHA
                        theme="dark"
                        sitekey={config.siteKey}
                        onChange={input.onChange} />
    }
    return(
        <div  className="form-group">
          {fields[config.tag]}
          {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </div>
    )
}


export const renderField = function(fieldConfig, field) {
    return(
        <Field key={field}
            type={fieldConfig.type}
            name={field} config={fieldConfig}
            component={FieldSetter}
            label={fieldConfig.label} />
    )
}

const textAreaConfig = (type) => {
    if(type == 'textarea') return ''
    return 'input-lg'
}

export const FieldSetter = function(_field) {

  let { meta, input, label, config } = _field
  const { rows, type } = config
  const setClass = textAreaConfig(type)

  if(!config.custom) {
      return (
        <div  className="form-group">
          <config.tag {...input} rows={rows} type={type} className={`form-input ${setClass}`} placeholder={label} />
          {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </div>
      )
  } else {
      return(<CustomField {..._field} />)
  }

}

export const TextArea = (_field) => {

}
