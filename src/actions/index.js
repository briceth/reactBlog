import { FETCH_POSTS, CREATE_POST } from './types';
import axios from 'axios';


// const API_KEY = '?key=123njcnjbncjndjcnjd'
// const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`

const ROOT_URL = 'https://jsonplaceholder.typicode.com/posts/'

export function fetchPosts() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  // const urlPost = `${ROOT_URL}`;
  const request = axios.post("https://reqres.in/api/users", props)
console.log(request)
  return {
    type: CREATE_POST,
    payload: request
  }
}
