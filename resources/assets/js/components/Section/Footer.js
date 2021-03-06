import { reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { CONTACT } from '../Forms/models/Contact'
import { validator } from '../Forms/helpers/Validator'
import ContactForm from '../Forms/Contact'

const DecoratedForm = reduxForm({
    form: 'contact-form',
    validate: validator(CONTACT)
})(ContactForm)

class Footer extends Component {
    render() {
        return(
            <footer className="footer">
                <DecoratedForm {...this.props} />
                <div className="container grid-lg">
                    <div className="columns">
                        <div className="copyright column col-3 col-xl-12  col-lg-12 col-md-12 col-sm-12 col-xs-12 col-mr-auto">
                            <span className="copyright-text">Copyright</span><span>   |    All rights reserved</span>
                        </div>
                        <div className="column col-2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                           <div className="social-icons">
                              <ul className="social social-circle">
                                 <li><a href="//www.twitter.com/llcsolutions"><i className="fa fa-linkedin-square"></i></a></li>
                                 <li><a href="//www.facebook.com/llcsolutions"><i className="fa fa-facebook-square"></i></a></li>
                                 <li><a href="//www.github.com/llcsolutions"><i className="fa fa-github-square"></i></a></li>
                              </ul>
                           </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer
