import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/app'
import promise from 'redux-promise'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
//import App from './components/app';
import PostsIndex from './components/postsIndex';
import PostNew from './components/postNew';
import store from './store'


//const store = applyMiddleware(promise)(createStore);

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={PostsIndex}></IndexRoute>
        <Route path='post/new' component={PostNew}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.root'))
