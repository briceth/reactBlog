import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import  { browserHistory } from 'react-router'
import { applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import promise from 'redux-promise'
import PostsGrid from './data/courses'
//create an object for the default data
const defaultState = {
  PostsGrid,
}

const storeWithMiddleware = applyMiddleware(promise)(createStore);


const store = storeWithMiddleware(rootReducer, defaultState)


//what does that does?
export const history = syncHistoryWithStore(browserHistory, store)

export default store
