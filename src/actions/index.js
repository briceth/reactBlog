// import { FETCH_POSTS, CREATE_POST } from './types';
// import axios from 'axios';
//
// //const API_KEY = '?key=123njcnjbncjndjcnjd'
// //const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`
//
// //const ROOT_URL = `http://swapi.co/api/people/1`
// //const ROOT_URL = 'https://jsonplaceholder.typicode.com/users'
//
// export function fetchPosts() {
//   const url = 'https://jsonplaceholder.typicode.com/users';
//   const request = axios.get(url)
//
//   return (dispatch) => {
//     request.then(({data}) => {
//       dispatch({ type: 'FETCH_POSTS', payload: data})
//     })
//   }
// }
//
// export function createPost(props) {
//   // const urlPost = `${ROOT_URL}`;
//   const request = axios.post(`${ROOT_URL}`, props)
//   console.log(request)
//   return {
//     type: CREATE_POST,
//     payload: request
//   }
// }
