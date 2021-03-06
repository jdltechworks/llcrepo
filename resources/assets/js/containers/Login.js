import _ from 'lodash'
import { reduxForm } from 'redux-form'
import { LOGIN } from '../components/Forms/models/Login'
import { renderField } from '../components/Forms/helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { validator } from '../components/Forms/helpers/Validator'


class Login extends Component {
  componentDidMount() {
  }
  submitForm(values) {
    const { actions } = this.props
    let { email, password } = values
    console.log(values)
  }
  render() {
    let { handleSubmit } = this.props
    return (
      <section className="login clearfix" style={{ paddingTop: '10%' }}>
        <div className="row">
          <div className="m-auto col-md-2 col-lg-2">
            <form onSubmit={handleSubmit((props) => {this.submitForm(props)})}>
              <div className="card">
                <div className="card-block">
                  <div className="card-title">
                    Log in to your account
                  </div>
                  <div className="card-text">
                  <br />

                  {_.map(LOGIN, renderField.bind(this))}
                  <div className="form-group text-right">
                    <small>New to LLCSolutions? <Link to="/register">Sign-up</Link></small>
                    <button className="btn btn-info">Sign-in</button>
                  </div>
                  </div>
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
    form:'login',
    validate: validator(LOGIN)
})(Login)
