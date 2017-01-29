// import { combineReducers } from 'redux';
// import ReducerPosts from './reducerPosts';
// import { reducer as formReducer } from 'redux-form';
//
//
// const rootReducer = combineReducers({
//   posts: ReducerPosts,
//   form: formReducer
// });
//
// export default rootReducer;

import { combineReducers } from 'redux';
import tweets from './tweetsReducer';
import user from './userReducer';

export default combineReducers({
  tweets,
  user,
});
