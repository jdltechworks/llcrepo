import React, { Component } from 'react'

class Services extends Component {
    render() {
        return(
            <div id="services" className="container">
                <h2>Services</h2>
                <img src="/images/mockup.png" className="img-responsive" />
                <div className="container grid-lg services-content">
                    <div className="columns">
                        <div className="column col-3">
                            <img src="/images/icon_consultancy.png" />
                        </div>
                        <div className="column col-9">
                            <h2>Consultancy</h2>
                            <p>{`We help you think through the holes and spot rooms for improvement whether that'd be building an app or a site and design
                                related things. That means we help you on your brain storm process and use the best tools in the business — including some of our
                                own proprietary softwares — to ensure the business gets secured and protected.`}</p>
                            <a href="#">SCHEDULE A MEETING</a>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column col-9">
                            <h2>App Development</h2>
                            <p>{
                                `A website or application is a great investment. So how it is built is important.
                                Every website should have performance goals. We will work with you to identify your
                                qualitative and quantitative goals, then design and build technology to deliver on those goals.
                                We'll work out the budget you have! Nothing more — Nothing less.`}</p>
                                <a href="#">VIEW SAMPLES</a>
                        </div>
                        <div className="column col-3">
                            <img src="/images/icon_development.png" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column col-12">
                            <h2>{`We're narrow in focus and deep in experience.`}</h2>
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
                    <div className="columns">
                        <div className="column col-3">
                            <img src="/images/icon_graphics.png" />
                        </div>
                        <div className="column col-9">
                            <h2>Web/Product Design / Branding</h2>
                            <p>{
                                `Branding is your client's first impression. It tells the people how serious you are and that you are professional
                                and you care. We can help you design from napkin sketch to finished digital product, get your idea to market quicker.
                                Sky's the limit.`}</p>
                            <a href="#">CHECKOUT PORTFOLIO</a>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column col-12">
                            <h2>{`What do you want to create? And how do we do it?`}</h2>
                            <img src="/images/steps.png" className="img-response" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
