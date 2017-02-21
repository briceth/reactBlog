import axios from 'axios'
import { browserHistory } from 'react-router'
import setAuthorizationToken from './../action_helpers/setAuthorizationToken'
import jwt from 'jsonwebtoken'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SET_CURRENT_USER } from './types';

const API_URL = 'http://localhost:3090';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}


export function signinUser({ email, password }) {
  return function(dispatch) {
    //submit email/password to the server
    axios.post(`${API_URL}/signin`, { email, password })
      .then(response => {
        //if request is good..
        //-Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        //-Save the JWT token
        const token = response.data.token;
        localStorage.setItem('token', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwt.decode(token)));
        //-redirect to the route/....whatever
      browserHistory.push('/');
      })
      .catch(() => {
        //if request is bad...
        //-show an error to the user
        dispatch(auth_error('bad log in info'));

      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(response => {
        console.log(response);
        dispatch({ type: AUTH_USER });
        localStorage.getItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(auth_error('already in use'))
      });
  }
}
export function auth_error(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: UNAUTH_USER,
  }
}
//we could use promise
export function fetchMessage() {
  return function(dispatch) {
    axios.get(`${API_URL}`, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(response => {
        console.log(response)
      })
    }
  }
