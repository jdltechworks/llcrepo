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
    message: '',
    toast: false
}

export const actions = {
    sendMail(values) {
        const headers = new Headers({
            'X-CSRF-TOKEN': values._token
        })

        return (dispatch, getState) => {
            const body = new FormData()
            dispatch({ type: types.IS_SENDING })
            map(values, (value, key) => {
                body.append(key, value)
            })

            return fetch('/contact', {
                method: 'POST',
                headers,
                credentials: 'same-origin',
                body
            }).then((res) => res.json())
            .then(({message}) => {

                dispatch({
                    type: types.SENT, message,
                    success: true,
                    toast: true
                })

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
    [types.SENT](state, { message, success, toast }) {
        return {
            ...state,
            isSending: false,
            message,
            success,
            toast
        }
    },
    [types.DISMISS](state, { isError }) {
        return {
            ...state,
            isError,
            toast: false
        }
    },
    [types.ERROR](state, { err }) {
        return {
            isSending: false,
            message: 'Failed to send message',
            isError: true,
            toase: true
        }
    }
})
