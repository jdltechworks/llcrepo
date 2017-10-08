import {createConstants, createReducer} from 'redux-module-builder'
import {createApiHandler, createApiAction} from 'redux-module-builder/api'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import includes from 'lodash/includes'


export const types = createConstants('menu')(
    'SELECT',
    'SELECTED',
    'ALL',
    'RESET'
)

export const initialState = {

}

export const actions = {
    getMenuSettings(menuSettings) {
        return (dispatch, getState) => {
            return dispatch({ type: types.ALL, menuSettings})
        }
    },
    setActive(name) {
        return (dispatch, getState) => {
            return dispatch({ type: types.SELECTED, name })
        }
    },
    resetMenu() {
        return (dispatch, getState) => {
            return dispatch({type: types.RESET})
        }
    }
}

export const reducer = createReducer({
    [types.ALL]: (state, { menuSettings }) => {
        let menu = {}

        menuSettings.map((value) => {
            Object.assign(menu, { [value.name]: value.active })
        })

        return {
            ...state,
            ...menu
        }
    },
    [types.SELECTED]: (state, { name }) => {
        let menu = {}

        map(state, (value, key) => {
            Object.assign(menu, { [key]: false })
        })


        return {
            ...menu,
            [name]: true
        }
    },
    [types.RESET]: (state, { name }) => {
        let menu = {}

        map(state, (value, key) => {
            Object.assign(menu, { [key]: false })
        })


        return {
            ...menu
        }
    }
})
