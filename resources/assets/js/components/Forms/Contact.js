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
    }
    render() {
      let { handleSubmit } = this.props
      return (
        <form onSubmit={handleSubmit((props) => {this.submitForm(props)})}>
            <section className="contact container grid-lg" style={{ paddingTop: '10%' }}>
                <div className="columns">
                    <div className="column col-6">
                        {map(primary, renderField.bind(this))}
                    </div>
                    <div className="column col-6">
                        <div className="columns">
                            <div className="column col-12">
                                {map(secondary, renderField.bind(this))}
                            </div>
                            <div className="column col-6">
                                <button className="btn btn-primary btn-block">SEND MESSAGE</button>
                            </div>
                            <div className="column col-6">
                                <button className="btn btn-primary btn-block">SCHEDULE A MEETING</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </form>
      )
  }
}


export default ContactForm
