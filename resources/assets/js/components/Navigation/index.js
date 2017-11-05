import React, { Component } from 'react'
import map from 'lodash/map'
import jump from 'jump.js'
import Media from 'react-media'
import MobileMenu from './MobileMenu'

export const menuSettings = [
    { name: 'HOME', href: 'app', active: true },
    { name: 'WHO_WE_ARE', href: 'about', active: false },
    { name: 'SERVICES', href: 'services', active: false },
    { name: 'CONTACT', href: 'contact', active: false }
]

export default class Navigation extends Component {
    state = {
        isOpen: false
    }
    scroller(href, e) {
        e.preventDefault()
        jump(document.getElementById(href))
    }
    mobileScroller(href, e) {
        e.preventDefault()
        jump(document.getElementById(href))
        this.setState({ isOpen: false })
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
            const yOffset = document.getElementById(value.href).offsetTop - 50
            if(yOffset <= yCoordinate) {
                setActive(value.name)
            } else if(yOffset > yCoordinate) {
                //resetMenu()
            }
        })

    }
    toggle(e) {
        e.preventDefault()
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        const { isOpen } = this.state
        const { menu, screens } = this.props
        const { toggle } = this
        return(
            <div className="navigation">
                <div className="container grid-xl">
                    <header className="navbar">
                      <section className="navbar-section brand-section">
                        <a href="#" className="navbar-brand mr-2">
                            <img className="img-responsive" src="/images/logo.png" />
                        </a>
                        <a href="#" onClick={toggle.bind(this)} className="show-md hamburger btn btn-lg ml-auto">
                            <i className="icon icon-menu"></i>
                        </a>
                      </section>

                      <Media query={{ maxWidth: screens.md }}>
                          {matches => matches ? (
                              <MobileMenu
                                isOpen={isOpen}
                                menu={menu}
                                scroller={this.mobileScroller.bind(this)}
                                menuSettings={menuSettings}/>
                          ) : (
                              <section className="navbar-section">
                                  <ul className="navbar-menu">
                                      {map(menuSettings, (value, key) =>
                                          <li key={key}  className={`navbar-menu-item`}>
                                            <a onClick={this.scroller.bind(this, value.href)}
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
                          )}
                      </Media>
                    </header>
                </div>
            </div>
        )
    }
}
