import React, { Component } from 'react'
import { CONTACT } from './models/Contact'
import { renderField } from './helpers'
import map from 'lodash/map'
import pick from 'lodash/pick'

const primary = pick(CONTACT, ['name', 'email'])

const secondary = pick(CONTACT, ['message'])



class ContactForm extends Component {
    componentDidMount() {
    }
    submitForm(values) {
      const { actions } = this.props
      console.log(values)
    }
    render() {
      let { handleSubmit } = this.props
      return (
        <div id="contact" className="section container contact">
            <h2 className="text-center">CONTACT US</h2>
            <form onSubmit={handleSubmit((props) => {this.submitForm(props)})}>
                <section className="container grid-lg contact-form">
                    <div className="columns contact-form-fields">
                        <div className="column col-6 col-md-12 col-sm-12 col-xs-12 mb-2">
                            {map(primary, renderField.bind(this))}
                        </div>
                        <div className="column col-6 col-md-12 col-sm-12 col-xs-12">
                            {map(secondary, renderField.bind(this))}
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column col-6 col-sm-12 col-xs-12">

                        </div>
                        <div className="column col-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="columns">
                                <div className="column col-6 col-md-12 col-sm-12 col-xs-12">
                                    <button className="btn btn-primary btn-block btn-lg mb-2">SEND MESSAGE</button>
                                </div>
                                <div className="column col-6 col-md-12 col-sm-12 col-xs-12">
                                    <button className="btn btn-primary btn-block btn-lg mb-2">SCHEDULE A MEETING</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
      )
  }
}


export default ContactForm
