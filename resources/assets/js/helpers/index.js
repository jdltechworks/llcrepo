import React from 'react'
import Dropzone from 'react-dropzone'
import _ from 'lodash'
import { Field } from 'redux-form'

/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */
export const renderField = function(fieldConfig, field) {

  if(_.includes(['textarea', 'selectbox'], fieldConfig.tag)) {
    return ( 
      <Field key={field} name={field} component={(_field) => {
        let { meta, input } = _field
        return (
        <div  className="form-group">
          <fieldConfig.tag {...input} className="form-control" placeholder={fieldConfig.label} />
          {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </div>
        )
      }} />
    )
  }
  if(_.eq(fieldConfig.type, 'file')) {
    const { uploadedFiles } = this.state
    const { images, uploadImage } = this.props
    return (
      <Field key={field} name={field} component={(_field) => {
        let { meta, input } = _field
        return (<div className="form-group">
        <Dropzone name={field} multiple={true} onDrop={(file, e) => { 
          input.onChange('file')
          uploadImage(file)
        }} />
        {meta.touched && meta.error ? <small>{meta.error}</small> : null}
        </div>)
      }} />
    )
  }
    return(
        <Field key={field} type={fieldConfig.type} name={field} component={TextField} label={fieldConfig.label} />
    )
}


export const TextField = function(_field) {
  let { meta, input, label, type } = _field
  return (
    <div  className="form-group">
      <input {...input} type={type} className="form-control" placeholder={label}/>
      {meta.touched && meta.error ? <small>{meta.error}</small> : null}
    </div>
  )
}

export const TextArea = (_field) => {
  
}