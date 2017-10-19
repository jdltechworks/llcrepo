import {createConstants, createReducer} from 'redux-module-builder'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import { push } from 'react-router-redux'

export const types = createConstants('contact')(
    'IS_SENDING',
    'SENT',
    'ERROR',
    'DISMISS'
)

export const initialState = {
    isSending: false,
    isError: false,
    message: ''
}

export const actions = {
    sendMail(values) {
        return (dispatch, getState) => {
            const body = new FormData()
            dispatch({ type: types.IS_SENDING })
            map(values, (value, key) => {
                body.append(key, value)
            })

            return fetch('/contact', {
                method: 'POST',
                credentials: 'same-origin',
                body
            }).then((res) => res.json())
            .then((message) => {
                console.log(message)
                dispatch({ type: types.SENT, message })
            }).catch(err => dispatch({ type: types.ERROR, err}))

        }
    },
    dismissMessage() {
        return {
            type: types.DISMISS,
            isError: false
        }
    }
}

export const reducer = createReducer({
    [types.IS_SENDING](state) {
        return {
            ...state,
            isSending: true
        }
    },
    [types.SEND](state, { message }) {
        return {
            ...state,
            isSending: false,
            message
        }
    },
    [types.DISMISS](state, { isError }) {
        return {
            ...state,
            isError
        }
    },
    [types.ERROR](state, { err }) {
        return {
            isSending: false,
            message: 'Failed to send message',
            isError: true
        }
    }
})
