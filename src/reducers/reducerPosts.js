import { FETCH_POSTS, FETCH_POST, DELETE_POST, SEARCH, AUTH_ERROR } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, value: '', jobSearched: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  case SEARCH:
    return { ...state, jobSearched: action.payload.data };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    //return { ...state, all: action.payload.data };
      //return { ...state, value: action.payload };
    // const { value } = action;
    // const data = ["briceth", "jules verne", "egghead"]
    // const titre = data.map((post) => {return post.title})
    // const jobSearched = titre.filter((val) => val.match("briceth"));
    // return { ...state, value, jobSearched }
  default:
    return state;
  }
}



// import { FETCH_POSTS } from '../actions/index';
//
// const INITIAL_STATE = { all: [], post: null }
//
// export default function(state = INITIAL_STATE, action) {
//   switch(action.type) {
//     case FETCH_POSTS:
//     return { ...state, all: action.payload }
//     default:
//     return state
//   }
// }
