import {createConstants, createReducer} from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'
import { push } from 'react-router-redux'


export const types = createConstants('auth')(
    'LOGIN',
    'CHECK',
    'LOGOUT',
    'REGISTER',
    'REGISTER_SUCCESS',
    'ERROR',
    'IS_NOT_AUTHENITCATED',
    'IS_AUTHENITCATED',
    'IS_REGISTERING'
)

export const initialState = {
    isLoggingIn: false,
    isLoggedIn:false,
    loggedOut: true
}

export const actions = {
    check () {
        return (dispatch, getState) => {

            dispatch({ type: types.CHECK })
            if(!isEmpty(curr_user)) {
                dispatch({
                    type: types.IS_AUTHENITCATED,
                    session: {}
                })
            } else {
                const { Auth } = getState()
                const { session } = Auth
                if(!isEmpty(session)) {
                    dispatch({
                        type: types.IS_AUTHENITCATED,
                        session
                    })
                    dispatch(push('/'))
                }
            }


        }
    },
    requireAuth () {
        return (dispatch, getState) => {

            dispatch({ type: types.CHECK })
            if(!isEmpty(curr_user)) {
                dispatch({
                    type: types.IS_AUTHENITCATED,
                    session: {}
                })

            } else {
                const { Auth } = getState()
                const { session } = Auth
                if(!isEmpty(session)) {
                    dispatch({
                        type: types.IS_AUTHENITCATED,
                        session
                    })
                } else {
                    dispatch(push('/login'))
                }
            }


        }
    },
    signup(props) {
        return (dispatch, getState) => {
            const body = new FormData()
            dispatch({ type: types.IS_REGISTERING })
            map(props, (value, key) => {
                body.append(key, value)
            })

            return fetch('/register', {
                method: 'POST',
                credentials: 'same-origin',
                body
            }).then((res) => res.json())
            .then((session) => {
                dispatch({ type: types.REGISTER_SUCCESS, session })
            }).catch(err => dispatch({ type: types.ERROR, err}))
        }
    },
    login(email, password) {
        const body = new FormData()
        body.append('email', email)
        body.append('password', password)

        /**
         * return an actions type and return objects of that type
         * you can use the fetch api here in there return section
         *
         * @param  {[type]} dispatch [description]
         * @return {[type]}          [description]
         */
        return (dispatch, getState) => {
            //send a fetch api here
            dispatch({ type: types.LOGIN })
            return fetch('/login', {
                method: 'POST',
                credentials: "same-origin",
                body
            }).then((res) => {
                return res.json()
            }).then((session) => {
                dispatch({ type: types.IS_AUTHENITCATED, session })
                dispatch(push('/'))
            }).catch(error => dispatch({ type: types.ERROR, error }))
        }
    },
    logout() {
        return (dispatch, getState) => {
            //send a fetch api here
            const body = new FormData()
            body.append('_token', '')

            return fetch('/logout', {
                method: 'POST',
                credentials: "same-origin",
                body
            }).then((res) => {
                return res.json()
            }).then((session) => {
                curr_user = ''
                dispatch({ type: types.LOGOUT, session: '' })
            }).catch(error => dispatch({ type: types.ERROR, error }))
        }
    }
}

export const reducer = createReducer({
    [types.LOGOUT]: (state, { session }) => {
        return {
            ...state,
            loggedOut: true,
            session: '',
            loggedIn: false
        }
    },
    [types.REGISTER]: (state, { session }) => {
        return {
            ...state,
            session
        }
    },
    [types.IS_AUTHENITCATED]: (state, { session }) => {
        return {
            ...state,
            loggedIn: true,
            loggedOut: false,
            session
        }
    },
    [types.ERROR]: (state, { error }) => {
        console.log(error)
        return {
            ...state,
            ...error
        }
    }
})
