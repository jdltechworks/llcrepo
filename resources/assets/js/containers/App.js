import React, { cloneElement, Component, Children } from 'react'
import { methods as actions } from '../provider/Client'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import Navigation from '../components/Navigation'

class App extends Component {
    componentDidMount() {
    }
    render() {
        const { props } = this
        const noform = _.omit(props, 'form')
        return(
            <div className="app-container">
                <Navigation />
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noform })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
