import React, { Component } from 'react'
import map from 'lodash/map'
import jump from 'jump.js'

export const menuSettings = [
    { name: 'HOME', href: 'app', active: true },
    { name: 'WHO_WE_ARE', href: 'about', active: false },
    { name: 'SERVICES', href: 'services', active: false },
    { name: 'CONTACT', href: 'contact', active: false }
]

export default class Navigation extends Component {
    scroller(name, e) {
        e.preventDefault()
        jump(e.currentTarget.attributes.href.value)
    }
    componentDidMount() {
        const { menuController } = this.props
        const { getMenuSettings } = menuController
        getMenuSettings(menuSettings)
        document.addEventListener('scroll', this.scrollObserver.bind(this))
    }
    scrollObserver() {
        const yCoordinate = window.pageYOffset
        const { menuController } = this.props
        const { setActive, resetMenu } = menuController

        map(menuSettings, (value, key) => {
            const yOffset = document.getElementById(value.href).offsetTop - 150
            if(yOffset <= yCoordinate) {
                setActive(value.name)
            } else if(yOffset > yCoordinate) {
                //resetMenu()
            }
        })

    }
    render() {
        const { menu } = this.props

        return(
            <div className="navigation">
                <div className="container grid-xl">
                    <header className="navbar">
                      <section className="navbar-section">
                        <a href="#" className="navbar-brand mr-2">
                            <img className="img-responsive" src="/images/logo.png" />
                        </a>
                      </section>
                      <section className="navbar-section">
                          <ul className="navbar-menu">
                              {map(menuSettings, (value, key) =>
                                  <li key={key}  className={`navbar-menu-item`}>
                                    <a onClick={this.scroller.bind(this, value.name)}
                                        className={`${menu[value.name] == true ? 'active' : ''}`}
                                        href={`#${value.href.toLowerCase()}`}>
                                        {value.name.replace(/_/g, ' ')}
                                    </a>
                                  </li>
                              )}
                              <li className="navbar-menu-item">
                                <a className="btn btn-primary btn-lg" href="#">SCHEDULE A MEETING</a>
                              </li>
                          </ul>

                      </section>
                    </header>
                </div>
            </div>
        )
    }
}
