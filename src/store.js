import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import  { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

import PostsGrid from './data/courses'


//create an object for the default data
const defaultState = {
  PostsGrid,
}

const store = createStore(rootReducer, defaultState)


//what does that does?
export const history = syncHistoryWithStore(browserHistory, store)

export default store
