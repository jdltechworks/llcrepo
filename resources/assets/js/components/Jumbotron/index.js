import React, { Component } from 'react'
import jump from 'jump.js'

class Jumbotron extends Component {
    scroller(target, e) {
        e.preventDefault()
        jump(document.getElementById(target))
    }
    render() {
        return(
            <div id="jumbotron" className="jumbotron">
                <div className="jumbotron-image">
                    <img src="/images/bg_header.jpg" />
                </div>
                <div className="jumbotron-content text-center">
                    <h1>Great Solutions. <br /> Proud Products.</h1>
                    <br />
                    <p>{`An extension of your team. Just a virtual version.`}</p>
                    <a href="#contact" onClick={this.scroller.bind(this)} className="btn btn-lg btn-transparent">
                        <span>CONTACT US KNOW <i className="icon icon-arrow-right" /></span>
                    </a>
                </div>
                <a className="jumbotron-arrow" href="#" onClick={this.scroller.bind(this, 'about')}><img src="/images/icon_arrow-down.png" /></a>
            </div>
        )
    }
}

export default Jumbotron
