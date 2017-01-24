import axios from 'axios';

const API_KEY = '?key=123njcnjbncjndjcnjd'
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts${API_KEY}`

export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts() {
  const url = `${ROOT_URL}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
