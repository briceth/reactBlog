import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST, AUTH_ERROR, CREATE_COMMENT, FETCH_COMMENT, CREATE_LIKE } from './types'
import axios from 'axios'

//import { browserHistory } from 'react-router'
//const API_URL = 'http://localhost:3090'

const ROOT_URL ='http://rest.learncode.academy/api/news/briceth92'
const API_URL = 'http://localhost:3000/api'

export function fetchPosts() {
  return function(dispatch) {
    axios.get(`${API_URL}/posts`)
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
     axios.get(`${API_URL}/posts/${id}`)
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
    axios.delete(`${API_URL}/posts/${id}`)
      .then(response => {
        //console.log(response)
        dispatch({ type: DELETE_POST, payload: response })
      })
  }
}

export function createComment(props, postId) {
  let config = {
  	"userId": "58ac1551c5ff2c4cbaf33c36",
  	"postId": postId,
  	"content": props.content
  }

  return function(dispatch) {
    axios.post(`${API_URL}/comment/`, config)
      .then(response => {
        //console.log(response)
        dispatch({ type: CREATE_COMMENT })
      })
  }
}

export function fetchComment() {
  return function(dispatch) {
    axios.get(`${API_URL}/comments/`)
      .then(response => {
        dispatch({ type: FETCH_COMMENT, payload: response.data })
      })
  }
}

export function increment(postId) {
  console.log(postId)
  let config = {
  	"userId": "58ac1dc72d0cfc4f86878e82",
  	"postId": postId
  }
  return function(dispatch) {
    axios.post(`${API_URL}/posts/`, config)
      .then(response => {
        console.log(response)
        dispatch({ type: CREATE_LIKE })
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
