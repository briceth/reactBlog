import { AUTH_USER } from '../actions/auth/types';
import { UNAUTH_USER } from '../actions/auth/types';
import { AUTH_ERROR } from '../actions/auth/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true};
    case UNAUTH_USER:
      return { ...state, authenticated: false};
    case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
