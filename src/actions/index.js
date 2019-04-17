import axios from 'axios';
import actionTypes from './types';

export const fetchUser = history => async dispatch =>
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: await axios.get('/api/fetch_user'),
    history
  });

export const signup = (
  username,
  company,
  password,
  history
) => async dispatch =>
  dispatch({
    type: actionTypes.SIGNUP,
    payload: await axios.post('/api/signup', { username, company, password }),
    history
  });

export const login = (username, password, history) => async dispatch =>
  dispatch({
    type: actionTypes.LOGIN,
    payload: await axios.post('/api/login', { username, password }),
    history
  });

export const setNotification = (message, isSuccessful = false) => {
  return {
    type: actionTypes.SET_NOTIFICATION,
    payload: { message, isSuccessful }
  };
};

export const clearNotification = () => {
  return {
    type: actionTypes.CLEAR_NOTIFICATION,
    payload: null
  };
};

export const ticketSend = (message, ticketIndex) => async dispatch =>
  dispatch({
    type: actionTypes.TICKET_SEND,
    payload: await axios.post('/api/ticket_send', { message, ticketIndex })
  });

export const ticketClose = ticketIndex => async dispatch =>
  dispatch({
    type: actionTypes.TICKET_CLOSE,
    payload: await axios.post('/api/ticket_close', { ticketIndex })
  });
