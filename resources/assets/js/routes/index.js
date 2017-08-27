import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from '../containers/App'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
    </Route>
)

export default routes
