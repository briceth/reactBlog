import { combineReducers } from 'redux';
import fetchPosts from './reducerPosts';
import { routerReducer } from 'react-router-redux';

//import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  posts: fetchPosts,
  routing: routerReducer
});

export default rootReducer;
