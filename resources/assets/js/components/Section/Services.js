import React, { Component } from 'react'
import Media from 'react-media'

class Services extends Component {
    render() {
        const { screens } = this.props
        return(
            <div id="services" className="services section container">
                <div className="services-icon">
                    <i className="fa fa-cog"></i>
                </div>
                <h2 className="text-center">Services</h2>
                <div className="container grid-lg">
                    <img src="/images/mockup.png" className="img-responsive" />
                </div>
                <div className="container grid-lg services-content">
                    <div className="columns services-details odd">
                        <div className="column col-3 col-sm-12 col-xs-12">
                            <img className="img-responsive" src="/images/icon_consultancy.png" />
                        </div>
                        <div className="column col-9 col-sm-12 col-xs-12 content">
                            <h2>Consultancy</h2>
                            <p>{`We help you think through the holes and spot rooms for improvement whether that'd be building an app or a site and design
                                related things. That means we help you on your brain storm process and use the best tools in the business — including some of our
                                own proprietary softwares — to ensure the business gets secured and protected.`}</p>
                            <a className="btn btn-lg"  href="#">SCHEDULE A MEETING</a>
                        </div>
                    </div>
                    <Media query={{ maxWidth: screens.md }}>
                        {matches => matches ? (
                            <div className="columns services-details even">
                                <div className="column col-sm-12 col-xs-12 col-3">
                                    <img style={{ display: 'block', margin: 'auto' }} src="/images/icon_development.png" />
                                </div>
                                <div className="column col-9 col-md-12 col-sm-12 col-xs-12">
                                    <h2 className="text-center">App Development</h2>
                                    <p>{
                                        `A website or application is a great investment. So how it is built is important.
                                        Every website should have performance goals. We will work with you to identify your
                                        qualitative and quantitative goals, then design and build technology to deliver on those goals.
                                        We'll work out the budget you have! Nothing more — Nothing less.`}</p>
                                        <a className="btn btn-lg" href="#">VIEW SAMPLES</a>
                                </div>
                            </div>
                            ) : (
                            <div className="columns services-details even">
                                <div className="column col-9 col-sm-12 col-xs-12 content">
                                    <h2>App Development</h2>
                                    <p>{
                                        `A website or application is a great investment. So how it is built is important.
                                        Every website should have performance goals. We will work with you to identify your
                                        qualitative and quantitative goals, then design and build technology to deliver on those goals.
                                        We'll work out the budget you have! Nothing more — Nothing less.`}</p>
                                        <a className="btn btn-lg" href="#">VIEW SAMPLES</a>
                                </div>
                                <div className="column col-sm-12 col-xs-12 col-3">
                                    <img className="btn btn-lg" className="img-responsive" src="/images/icon_development.png" />
                                </div>
                            </div>
                        )}
                    </Media>
                    <div className="columns services-details-list">
                        <div className="column col-12 col-sm-12 col-xs-12">
                            <h2 className="text-center">{`We're narrow in focus and deep in experience.`}</h2>
                            <div className="services-list">
                                <ul>
                                    <li>WEBSITE DEVELOPMENT</li>
                                    <li>CUSTOM WEB APPLICATIONS</li>
                                    <li>API DEVELOPMENT</li>
                                    <li>THIRD-PARTY INTEGRATIONS</li>
                                    <li>MOBILE APPS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="columns services-details odd">
                        <div className="column col-3 col-sm-12 col-xs-12">
                            <img className="img-responsive" src="/images/icon_graphics.png" />
                        </div>
                        <div className="column col-9 col-sm-12 col-xs-12 content">
                            <h2>Web / Product Design / Branding</h2>
                            <p>{
                                `Branding is your client's first impression. It tells the people how serious you are and that you are professional
                                and you care. We can help you design from napkin sketch to finished digital product, get your idea to market quicker.
                                Sky's the limit.`}</p>
                            <a className="btn btn-lg" href="#">CHECKOUT PORTFOLIO</a>
                        </div>
                    </div>
                    <div className="columns services-details-last">
                        <div className="column col-12">
                            <h2 className="text-center">{`What do you want to create? And how do we do it?`}</h2>
                            <img className="img-responsive" src="/images/steps.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
