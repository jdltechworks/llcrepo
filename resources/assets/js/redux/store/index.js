import modules from '../modules'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { createApiMiddleware } from 'redux-module-builder/api'
import { bindActionCreatorsToStore } from 'redux-module-builder'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'


const { reducers, actions, initialState } = modules()

const isDev = process.env.NODE_ENV === 'development'

let middlewares = [
    createApiMiddleware({
        baseUrl: process.env.API,
        requestTransforms: [
        (getState, options) => req => {
            //no transformation yet
            return req
        }]
    }),
    thunkMiddleware
]

export default (historyType, composer, request) => {
    middlewares.push(
        routerMiddleware(historyType)
    )

    const create = composer ? composer : compose
    const history = !request ? historyType : historyType(request.url)
    let composeStore = create(
        applyMiddleware(...middlewares),
    )(createStore)
    const store = composeStore(reducers, initialState)

    return {
        history: syncHistoryWithStore(history, store),
        store,
        actions
    }
}
