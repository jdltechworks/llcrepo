import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import useStoreWith '../redux/store'

const { store, withActions, history } = useStoreWith(browserHistory)
const routes = {}

export default class ServerRoutes extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router
                  history={history}
                  createElement={withActions}
                  routes={routes} />
            </Provider>
        )
    }
}
