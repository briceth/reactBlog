import { combineReducers } from 'redux'
import posts from './postReducers'
import auth from './authReducers'
import comment from './commentReducers'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  posts,
  form,
  routing: routerReducer,
  auth,
  comment
})

export default rootReducer
