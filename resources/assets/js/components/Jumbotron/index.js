import React, { Component } from 'react'
import jump from 'jump.js'

class Jumbotron extends Component {
    scroller(e) {
        e.preventDefault()
        jump(e.currentTarget.attributes.href.value)
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
                    <p>Nam purus augue, bibendum quis magna id, sollicitudin prottitor ex.</p>
                    <a href="#contact" onClick={this.scroller.bind(this)} className="btn btn-lg btn-transparent">
                        <span>CONTACT US KNOW <i className="icon icon-arrow-right" /></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Jumbotron
