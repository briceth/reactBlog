import { combineReducers } from 'redux';
import posts from './reducerPosts';
//import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  posts,
  //form: formReducer
});

export default rootReducer;
