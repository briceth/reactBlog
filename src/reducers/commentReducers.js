import { FETCH_COMMENT } from '../actions/types'

import _ from 'lodash'

const INITIAL_STATE = { comment: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_COMMENT:
  return { ...state, comment: action.payload.data };
    //return _.unionBy(state, action.payload.data, '_id');
  default:
    return state;
  }
}
