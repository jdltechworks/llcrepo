import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { REGISTER } from '../models/Register'
import { renderField } from '../helpers'
import React, { Component, PropTypes } from 'react'


const validate = (values) => {
  const errors = {};
  _.each(REGISTER, (type, field) => {
    if(!values[field]) {
      errors[field] = `${field} is blank`
    }
  });

  return errors;
}


class Register extends Component {
  componentDidMount() {
  }
  submitForm(values) {
    const { actions } = this.props
  }
  render() {
    let { handleSubmit } = this.props
    return (
      <section className="register clearfix" style={{ paddingTop: '10%' }}>
        <div className="row">
          <div className="m-auto col-md-2 col-lg-2">
            <form onSubmit={handleSubmit((props) => {this.submitForm(props)})}>
              <div className="card">
                <div className="card-block">
                <div className="card-title text-center">
                  Sign-up
                </div>
                <div className="card-text">
                <br />
                {_.map(REGISTER, renderField.bind(this))}
                  <div className="form-group text-right">
                    <button className="btn btn-info">Signup</button>
                  </div>
                </div>
                <br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default reduxForm({
    form:'register',
    validate
})(Register)
