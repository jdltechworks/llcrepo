import { reduxForm } from 'redux-form'
import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import About from '../components/Section/About'
import Services from '../components/Section/Services'
import Footer from '../components/Section/Footer'
import StickyNavigation from '../components/StickyNavigation'

export default class Home extends Component {
    render() {
        const { Menu, actions, screens } = this.props
        return(
            <div id="home" className="home">
                <StickyNavigation menuController={actions.Menu} menu={Menu} />
                <Jumbotron screens={screens} />
                <About screens={screens} />
                <Services screens={screens} />
                <Footer screens={screens} />
            </div>
        )
    }
}
