import { combineReducers } from 'redux';
import posts from './reducerPosts';
import { routerReducer } from 'react-router-redux';

import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  posts,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
