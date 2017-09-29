import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return(
            <div className="container grid-xl">
                <header className="navbar">
                  <section className="navbar-section">
                    <a href="#" className="navbar-brand mr-2">
                        <img className="img-responsive" src="/images/logo.png" />
                    </a>
                  </section>
                  <section className="navbar-section">
                      <ul className="navbar-menu">
                        <li className="navbar-menu-item">
                          <a href="#">HOME</a>
                        </li>
                        <li className="navbar-menu-item">
                          <a href="#">WHO WE ARE</a>
                        </li>
                        <li className="navbar-menu-item">
                          <a href="#">SERVICES</a>
                        </li>
                        <li className="navbar-menu-item">
                          <a href="#">SCHEDULE A MEETING</a>
                        </li>
                      </ul>
                  </section>
                </header>
            </div>
        )
    }
}
