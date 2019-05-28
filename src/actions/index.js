import Axios from 'axios';
import actionTypes from './types';

const axios = Axios.create({
  baseURL: 'https://answerket-server.herokuapp.com'
});

export const fetchUser = () => async dispatch =>
  dispatch({
    type: actionTypes.FETCH_USER,
    payload: await axios.get('/api/fetch')
  });

export const signup = (email, password, companyName) => async dispatch =>
  dispatch({
    type: actionTypes.SIGNUP,
    payload: await axios.post('/api/signup', { email, password, companyName })
  });

export const login = (email, password) => async dispatch =>
  dispatch({
    type: actionTypes.LOGIN,
    payload: await axios.post('/api/login', { username: email, password })
  });

export const logout = () => async dispatch =>
  dispatch({
    type: actionTypes.LOGOUT,
    payload: await axios.get('/api/logout')
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
    payload: await axios.post('/api/inquiry_message_company', {
      message,
      ticketIndex
    })
  });

export const ticketClose = ticketIndex => async dispatch =>
  dispatch({
    type: actionTypes.TICKET_CLOSE,
    payload: await axios.post('/api/ticket_close', { ticketIndex })
  });

export const validateCompany = (companyName, companyNumber) => async dispatch =>
  dispatch({
    type: actionTypes.COMPANY_VALIDATE,
    payload: await axios.post('/api/company_validate', {
      companyName,
      companyNumber
    })
  });

// export const inquirySubmit = (
//   name,
//   subject,
//   message
// ) => async dispatch =>
//   dispatch({
//     type: actionTypes.INQUIRY_SUBMIT,
//     payload: await axios.post('/api/validate_company', {
//       name,
//       subject,
//       message
//     })
//   });

export const clearLastAction = () => dispatch =>
  dispatch({
    type: actionTypes.CLEAR_LAST_ACTION
  });
