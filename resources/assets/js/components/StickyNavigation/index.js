import React, { Component } from 'react'
import { menuSettings } from '../Navigation'
import map from 'lodash/map'
import jump from 'jump.js'

export default class StickyNavigation extends Component {
    scroller(name, e) {
        e.preventDefault()
        jump(e.currentTarget.attributes.href.value)
    }
    render() {
        const { menu } = this.props
        return(
            <div className="sticky-nav hide-md hide-sm hide-lg">
                <ul>
                    {map(menuSettings, (value, key) => {
                        const { name, href } = value
                        return(
                            <li key={key}>
                            <a onClick={this.scroller.bind(this, value.name)}
                                className={`${menu[value.name] == true ? 'active' : ''}`}
                                href={`#${value.href.toLowerCase()}`}>
                                <i className="fa fa-circle-o"></i></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
