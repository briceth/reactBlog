import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import PostsIndex from './components/postsIndex'
import formPage from './components/formPage'
import postShow from './components/postShow'

import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Signout from './components/auth/signout'
import store from './store'
//import setAuthorizationToken from './actions/action_helpers/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import setCurrentUser from './actions/auth/index'

if (localStorage.jwtToken) {
  console.log(localStorage.jwtToken)
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={PostsIndex}></IndexRoute>
        <Route path='post/new' component={formPage}></Route>
        <Route path='post/:id' component={postShow}></Route>
        <Route path='signin' component={Signin} />
        <Route path='signup' component={Signup} />
        <Route path='signout' component={Signout} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.root'))
