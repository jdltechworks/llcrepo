import React, { Component } from 'react'
import { menuSettings } from '../Navigation'
import map from 'lodash/map'
import jump from 'jump.js'

export default class StickyNavigation extends Component {
    scroller(e) {
        e.preventDefault()
        jump(e.currentTarget.attributes.href.value)
    }
    render() {
        return(
            <div className="sticky-nav">
                <ul>
                    {map(menuSettings, (value, key) => {
                        const { name, href } = value
                        return(
                            <li key={key}>
                            <a onClick={this.scroller.bind(this)}
                                href={`#${href.toLowerCase()}`}><i className="fa fa-circle-o"></i></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
