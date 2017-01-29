
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import promise from 'redux-promise';

import routes from './routes';


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
//import App from './components/app'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

  ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('.root'))
