import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import useStoreWith from '../redux/store'
import routes from '../routes'

const { store, withActions, history } = useStoreWith(
  browserHistory,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
)

export default class ClientProvider extends Component {
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
