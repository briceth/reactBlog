import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
//import App from './components/app';
import PostsIndex from './components/postsIndex';
import formPage from './components/formPage';
import postShow from './components/postShow';
import store from './store'


const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <IndexRoute component={PostsIndex}></IndexRoute>
        <Route path='post/new' component={formPage}></Route>
        <Route path='post/:id' component={postShow}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.querySelector('.root'))
