import { FETCH_POSTS, FETCH_POST, DELETE_POST, SEARCH, AUTH_ERROR } from '../actions/types'

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
  default:
    return state;
  }
}
