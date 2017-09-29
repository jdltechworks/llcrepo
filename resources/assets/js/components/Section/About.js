import React, { Component } from 'react'

class About extends Component {
    render() {
        return(
            <div id="about" className="section container grid-xl">
                <h2 className="text-center">Who We Are</h2>
                <div className="columns">
                    <div className="column col-8">
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
                    <a href="#" className="btn btn-primary btn-lg">CONTACT US</a>
                    <a href="#" className="btn btn-lg">LEARN MORE</a>
                    </div>
                    <div className="column col-4">
                        <img src="/images/icon_who-we-are.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About
