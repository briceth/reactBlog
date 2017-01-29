import { combineReducers } from 'redux';
import PostsGrid from './reducerPosts';
import { routerReducer } from 'react-router-redux';

//import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  PostsGrid,
  routing: routerReducer
});

export default rootReducer;
