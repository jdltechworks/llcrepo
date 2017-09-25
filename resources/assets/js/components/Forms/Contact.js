import React, { Component } from 'react'
import { CONTACT } from './models/Contact'
import { renderField } from './helpers'
class ContactForm extends Component {
    componentDidMount() {
    }
    submitForm(values) {
      const { actions } = this.props
    }
    render() {
      let { handleSubmit } = this.props
      return (
        <section className="contact clearfix" style={{ paddingTop: '10%' }}>
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
                  {_.map(CONTACT, renderField.bind(this))}
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


export default ContactForm
