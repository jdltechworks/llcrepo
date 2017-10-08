import React, { cloneElement, Component, Children } from 'react'
import { methods as actions } from '../provider/Client'
import { connect } from 'react-redux'
import omit from 'lodash/omit'
import Navigation from '../components/Navigation'

const screens = {
    xs: 480,
    sm: 600,
    md: 960,
    xl: 1280,
    xxl: 1140
}

class App extends Component {
    componentDidMount() {
    }
    render() {
        const { props } = this
        const noform = _.omit(props, 'form')
        return(
            <div className="app-container">
                <Navigation
                    menuController={props.actions.Menu}
                    menu={props.Menu}
                    screen={screen}/>
                {Children.map(this.props.children, (child) => {
                    return cloneElement(child, { ...noform, screen })
                })}
            </div>
        )
    }
}


export default connect(state => state)(App)
