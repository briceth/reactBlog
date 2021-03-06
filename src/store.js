import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import  { browserHistory } from 'react-router'
import { applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
//import promise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import PostsGrid from './data/courses'


const storeWithMiddleware = applyMiddleware(reduxThunk)(createStore)


const store = storeWithMiddleware(rootReducer)


//what does that does?
export const history = syncHistoryWithStore(browserHistory, store)

export default store
