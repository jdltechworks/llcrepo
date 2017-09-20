import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return(
            <header className="navbar">
              <section className="navbar-section">
                <a href="#" className="navbar-brand mr-2">Spectre.css</a>
              </section>
              <section className="navbar-section">
                  <a href="#" className="btn btn-link">Docs</a>
                  <a href="https://github.com/picturepan2/spectre" className="btn btn-link">GitHub</a>
              </section>
            </header>
        )
    }
}
