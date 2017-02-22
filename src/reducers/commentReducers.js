import { FETCH_COMMENT } from '../actions/index';

const INITIAL_STATE = { comment: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_COMMENT:
    return { ...state, comment: action.payload.data };
  default:
    return state;
  }
}
