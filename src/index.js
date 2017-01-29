// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
<<<<<<< HEAD
import App from './components/app';
import promise from 'redux-promise';
//import thunk from 'redux-thunk';
//import createLogger from 'redux-logger';
=======
// import App from './components/app';
// import thunk from 'redux-thunk';
// //import createLogger from 'redux-logger';
//
//
>>>>>>> fb8caef3e2bbd56cc90d612d316093f40d441a2c
import routes from './routes';
//
// import reducers from './reducers';
//
// // import ReduxPromise from 'redux-promise'
//
// //promise
// // const logger = createLogger();
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
//
// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.querySelector('.root'));

  import React from 'react'
  import ReactDOM from 'react-dom'
  import { Provider } from 'react-redux'

  import store from './store'
  import App from './components/app'

<<<<<<< HEAD
//promise
// const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
=======
>>>>>>> fb8caef3e2bbd56cc90d612d316093f40d441a2c

  ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('.root'))
