import { createStore, compse } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import  { browserHistory } from 'react-router'

//import the root reducer
import rootReducer from './reducers/index'

//import PhotoGrid from './data/courses'


//create an object for the default data
// const defaultState = {
//   PhotoGrid,
// }

const store = createStore(rootReducer)


//what does that does?
export const history = syncHistoryWithStore(browserHistory, store)

export default store
