import modules from '../modules'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { bindActionCreatorsToStore } from 'redux-module-builder'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'


const { reducers, actions, initialState } = modules()

let middlewares = [
    thunkMiddleware
]

const creator = (composer) => {
  if(composer) return composer
  return compose
}

const setHistoryType = (historyType, request) => {

  if(request) return historyType(request.url)

  return historyType

}

export default (historyType, composer, request) => {
    const create = creator(composer)
    const history = setHistoryType(historyType, request)

    let composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)

    const store = composeStore(reducers, initialState)

    middlewares.push(
        routerMiddleware(historyType)
    )

    return {
        history: syncHistoryWithStore(history, store),
        store,
        actions: bindActionCreatorsToStore(actions, store)
    }
}
