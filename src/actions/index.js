import axios from 'axios'

import { browserHistory } from 'react-router'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'
export const AUTH_ERROR = 'AUTH_ERROR'
export const CREATE_COMMENT = 'CREATE_COMMENT'
export const  FETCH_COMMENT ='FETCH_COMMENT'

const ROOT_URL ='http://rest.learncode.academy/api/news/briceth92'
//const API_URL = 'http://localhost:3090'
//const API_REDDIT = 'http://localhost:3000/api'   //pas besoin de sign

export function fetchPosts() {
  return function(dispatch) {
    axios.get('http://localhost:3000/api/posts')
      .then(response => {
        //console.log(response)
        dispatch({ type: FETCH_POSTS, payload: response.data })
      })
      .catch(() => {
        dispatch(auth_error('can not load'))
    })
  }
}
  export function auth_error(error) {
   return {
     type: AUTH_ERROR,
     payload: error
    }
 }

 export function fetchPost(id) {
   return function(dispatch) {
     axios.get(`http://localhost:3000/api/posts/${id}`)
     .then(response => {
       //console.table(response.data)
       dispatch({ type: FETCH_POST, payload: response })
     })
   }
 }


export function createPost(props) {
  return function(dispatch) {
    axios.post('http://localhost:3000/api/post', props)
      .then(response => {
        //console.log(response)
        dispatch({ type: CREATE_POST })
      })
  }
}


export function deletePost(id) {
  return function(dispatch) {
    axios.delete(`http://localhost:3000/api/posts/${id}`)
      .then(response => {
        //console.log(response)
        dispatch({ type: DELETE_POST, payload: response })
      })
  }
}

export function createComment(props, postId) {
  return function(dispatch) {
    axios.post(`http://localhost:3000/api/comment/`, props, postId)
      .then(response => {
        console.log(response)
        dispatch({ type: CREATE_COMMENT })
      })
  }
}

export function fetchComment() {
  return function(dispatch) {
    axios.get(`http://localhost:3000/api/comments/`)
      .then(response => {
        console.log(response)
        dispatch({ type: FETCH_COMMENT, payload: response.data })
      })
  }
}


// export const SEARCH = 'SEARCH';
//
// export function search(value) {
//   const request = axios.get('http://rest.learncode.academy/api/news/briceth92')
//   return {
//     type: SEARCH,
//     payload: request,
//     value
//   }
// }
