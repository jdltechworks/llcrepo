import React, { Component } from 'react'
import map from 'lodash/map'
import jump from 'jump.js'

export const menuSettings = [
    { name: 'HOME', href: 'app' },
    { name: 'WHO WE ARE', href: 'about' },
    { name: 'SERVICES', href: 'services' },
    { name: 'CONTACT', href: 'contact' }
]

export default class Navigation extends Component {
    scroller(e) {
        e.preventDefault()
        jump(e.currentTarget.attributes.href.value)
    }
    render() {
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
                                  <li key={key}  className="navbar-menu-item">
                                    <a onClick={this.scroller.bind(this)}
                                        href={`#${value.href.toLowerCase()}`}>{value.name}</a>
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
