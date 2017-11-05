import React, { Component } from 'react'
import Media from 'react-media'
import jump from 'jump.js'

class About extends Component {
    handleClick(cog, e) {
        e.preventDefault()
        if(cog) {
            jump(document.getElementById('services'))
            return
        }
        jump(document.getElementById('contact'))
    }
    render() {
        const { screens } = this.props
        return(
            <div id="about" className="section container grid-xl">
                <h2 className="text-center">Who We Are</h2>

                <Media query={{ maxWidth: screens.md }}>
                    {matches => matches ? (
                        <div className="columns">
                            <div className="column col-12 col-sm-12 col-xs-12">
                                <img style={{ display: 'block', margin: 'auto' }}
                                    src="/images/icon_who-we-are.png" />
                            </div>
                            <div className="column col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 section-gap">
                                <p>
                                    {`  A unified team of designers, developers,
                                        user experience fanatics that are keen on human-centered design
                                        and devotes at the alter of innovation. And oh, we love beers,
                                        travel, food trip and new biz ideas!
                                    `}
                                </p>
                                <p>
                                    {
                                        `We crafts solutions that fits! We utilize an à la carte dynamic solutions but we'll be
                                        the first to say that we're and it'll be not for everyone. We can't help you get more subscribers on Youtube,
                                         but that's okay, we could still help you and refer some of legit connections we have. So let us know.`}
                                </p>
                                <div className="columns">
                                    <div className="column col-6 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-mr-auto">
                                        <div className="columns btn-grp">
                                            <div className="column col-6 col-sm-12">
                                                <a href="#" onClick={this.handleClick.bind(this, false)} className="btn btn-primary btn-block btn-lg">CONTACT US</a>
                                            </div>
                                            <div className="column col-6 col-sm-12 mt-2">
                                                <a href="#" onClick={this.handleClick.bind(this, false)} className="btn btn-block btn-lg">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="columns">
                            <div className="column col-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                                <p>
                                    {`  A unified team of designers, developers,
                                        user experience fanatics that are keen on human-centered design
                                        and devotes at the alter of innovation. And oh, we love beers,
                                        travel, food trip and new biz ideas!
                                    `}
                                </p>
                                <p>
                                    {
                                        `We crafts solutions that fits! We utilize an à la carte dynamic solutions but we'll be
                                        the first to say that we're and it'll be not for everyone. We can't help you get more subscribers on Youtube,
                                         but that's okay, we could still help you and refer some of legit connections we have. So let us know.`}
                                </p>
                                <div className="columns">
                                    <div className="column col-6 col-lg-8 col-md-12 col-sm-12 col-xs-12 col-mr-auto">
                                        <div className="columns">
                                            <div className="column col-6">
                                                <a href="#" onClick={this.handleClick.bind(this, false)} className="btn btn-primary btn-block btn-lg">CONTACT US</a>
                                            </div>
                                            <div className="column col-6">
                                                <a href="#" onClick={this.handleClick.bind(this, false)} className="btn btn-block btn-lg">LEARN MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column col-4 col-sm-12 col-xs-12">
                                <img src="/images/icon_who-we-are.png" />
                            </div>
                        </div>

                    )}
                </Media>

            </div>
        )
    }
}

export default About
