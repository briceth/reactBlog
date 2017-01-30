
//import { FETCH_POSTS, CREATE_POST } from './types';
import axios from 'axios';
import fetch from 'isomorphic-fetch';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

//const API_KEY = '?key=123njcnjbncjndjcnjd'
//const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`

//const ROOT_URL = `http://swapi.co/api/people/1`
//const ROOT_URL = 'https://jsonplaceholder.typicode.com/users'

export function fetchPosts() {
  //const url = `${ROOT_URL}`
  const request = axios.get('http://rest.learncode.academy/api/news/briceth92')

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  // const urlPost = `${ROOT_URL}`;
  const request = axios.post('http://rest.learncode.academy/api/news/briceth92', props)
  console.log(request)
  return {
    type: CREATE_POST,
    payload: request
  }
}
