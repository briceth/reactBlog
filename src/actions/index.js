import axios from 'axios';
//import { browserHistory } from 'react-router';
import fetch from 'isomorphic-fetch';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

//const API_KEY = '?key=123njcnjbncjndjcnjd'
//const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`

//const ROOT_URL = `http://swapi.co/api/people/1`
//const ROOT_URL = 'https://jsonplaceholder.typicode.com/users'

const ROOT_URL ='http://rest.learncode.academy/api/news/briceth92'
//const API_URL = 'http://localhost:3090'

export function fetchPosts() {
  return function(dispatch) {
    axios.get(ROOT_URL)
      .then(response => {
        console.log(response);
        dispatch({ type: FETCH_POSTS, payload: response });
      })
      .catch(() => {
        dispatch(('already in use'))
      });
  }
}
//export function fetchPosts() {
  //const request = axios.get('http://rest.learncode.academy/api/news/briceth92')
  //return {
    //type: FETCH_POSTS,
  //  payload: request
  //}
//npm install redux thunk
  // return((dispatch) => {
  //   request.then(({data}) => {
  //     dispatch({type: FETCH_POSTS, payload: data})
  //   })
  // })

//}

export function createPost(props) {
  return function(dispatch) {
    axios.post('http://rest.learncode.academy/api/news/briceth92', props)
      .then(response => {
        console.log(response)
        dispatch({ type: CREATE_POST })
        browserHistory.push('/');
      })
  }
}
// export function createPost(props) {
//   const request = axios.post('http://rest.learncode.academy/api/news/briceth92', props)
//   return {
//     type: CREATE_POST,
//     payload: request
//   }
// }
export function fetchPost(id) {
  return function(dispatch) {
    axios.get(`http://rest.learncode.academy/api/news/briceth92/${id}`)
      .then(response => {
        console.log(response)
        dispatch({ type: FETCH_POST, payload: response})
      })
  }
}


// export function fetchPost(id) {
//   const request = axios.get(`http://rest.learncode.academy/api/news/briceth92/${id}`)
//   return {
//     type: FETCH_POST,
//     payload: request
//   }
// }
export function deletePost(id) {
  return function(dispatch) {
    axios.delete(`http://rest.learncode.academy/api/news/briceth92/${id}`)
      .then(response => {
        console.log(response)
        dispatch({ type: DELETE_POST, payload: response })
      })
  }
}
// export function deletePost(id) {
//   const request = axios.delete(`http://rest.learncode.academy/api/news/briceth92/${id}`)
//   return {
//     type: DELETE_POST,
//     payload: request
//   }
// }

export const SEARCH = 'SEARCH';

export function search(value) {
  const request = axios.get('http://rest.learncode.academy/api/news/briceth92')
  return {
    type: SEARCH,
    payload: request,
    value
  }
}
