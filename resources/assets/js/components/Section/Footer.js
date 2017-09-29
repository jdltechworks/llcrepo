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
            <footer>
                <DecoratedForm />
                <div className="container grid-lg">
                    <div className="columns">
                        <div className="column col-6">
                            Copyright | All rights reserved
                        </div>
                        <div className="column col-6">
                            <div className="footer--social-icons">
                               <div className="social--icons">
                                  <ul className="social social-circle">
                                     <li><a href="//www.twitter.com/jdltechworks"><i className="fa fa-twitter"></i></a></li>
                                     <li><a href="//www.facebook.com/jdltechworks"><i className="fa fa-facebook"></i></a></li>
                                     <li><a href="//www.github.com/jdltechworks"><i className="fa fa-github"></i></a></li>
                                  </ul>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer
