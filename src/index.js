import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import App from './components/app';
import thunk from 'redux-thunk';
//import createLogger from 'redux-logger';


import routes from './routes';

import reducers from './reducers';

// import ReduxPromise from 'redux-promise'

//promise
// const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.root'));

  // import React from 'react'
  // import ReactDOM from 'react-dom'
  // import { Provider } from 'react-redux'
  //
  // import store from './store'
  // import App from './components/app'
  //
  //
  // ReactDOM.render(<Provider store={store}>
  //   <App />
  // </Provider>, document.querySelector('.container'))
