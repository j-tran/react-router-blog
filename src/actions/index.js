import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// API DOCUMENTATION https://reduxblog.herokuapp.com/
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = '?key=nlPcqvsh4dz';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request,
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

  return {
    type: CREATE_POST,
    payload: request,
  };
}
