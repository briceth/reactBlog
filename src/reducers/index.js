import { combineReducers } from 'redux';
import posts from './reducerPosts';
import auth from './authReducers';
import { routerReducer } from 'react-router-redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  posts,
  form,
  routing: routerReducer,
  auth
});

export default rootReducer;
