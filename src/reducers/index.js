import { combineReducers } from 'redux';
import PostsReducer from './reducerPosts';
import auth from './authReducers';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  routing: routerReducer,
  auth: auth
});

export default rootReducer;
