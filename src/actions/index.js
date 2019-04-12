import axios from 'axios';
import actionTypes  from './types';

export const fetchUser = () => async dispatch =>
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: await axios.get('/api/fetch_user')
  });

  export const signup = (username, password, history) => async dispatch =>
  dispatch({
    type: actionTypes.SIGNUP,
    payload: await axios.post('/api/signup', { username, password }),
    history
  });

  export const login = (username, password, history) => async dispatch =>
  dispatch({
    type: actionTypes.LOGIN,
    payload: await axios.post('/api/login', { username, password }),
    history
  });