import React, { Component } from 'react'

class Jumbotron extends Component {
    render() {
        return(
            <div id="jumbotron" className="jumbotron">
                <img src="/images/bg_header.jpg" className="img-responsive" />
                <div className="jumbotron-content text-center">
                    <h1>Great Solutions. <br /> Proud Products.</h1>
                    <br />
                    <p>Nam purus augue, bibendum quis magna id, sollicitudin prottitor ex.</p>
                    <a href="#" className="button">CONTACT US KNOW <i className="icon icon-arrow-right" /></a>
                </div>
            </div>
        )
    }
}

export default Jumbotron
