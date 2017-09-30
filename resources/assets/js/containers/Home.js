import { reduxForm } from 'redux-form'
import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import About from '../components/Section/About'
import Services from '../components/Section/Services'
import Footer from '../components/Section/Footer'


export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <Jumbotron />
                <About />
                <Services />
                <Footer />
            </div>
        )
    }
}
