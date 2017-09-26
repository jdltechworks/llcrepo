import { reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { CONTACT } from '../components/Forms/models/Contact'
import Jumbotron from '../components/Jumbotron'
import About from '../components/Section/About'
import Services from '../components/Section/Services'
import ContactForm  from '../components/Forms/Contact'
import { validator } from '../components/Forms/helpers/Validator'
import Footer from '../components/Section/Footer'
const DecoratedForm = reduxForm({
    form: 'contact-form',
    validate: validator(CONTACT)
})(ContactForm)

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <Jumbotron />
                <About />
                <Services />
                <DecoratedForm />
                <Footer />
            </div>
        )
    }
}
