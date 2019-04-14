import actionTypes from '../actions/types';
import helpers from './helpers';
import messages from '../config/messages';

const initialState = {
  notification: {
    message: '',
    isSuccessful: false
  },
  company: null,
  tickets: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.FETCH_USER:
      if(action.payload.data.isSuccessful){
        // Redirects to dashboard
        action.history.push('/dashboard');
        return {
          ...state,
          company: action.payload.data.company,
          tickets: action.payload.data.tickets
        };
      }
      return state;

    case actionTypes.LOGIN:
      if (action.payload.data.isSuccessful) {
        // Redirects to dashboard
        action.history.push('/dashboard');
        return {
          ...state,
          company: action.payload.data.company,
          tickets: action.payload.data.tickets
        };
      } else {
        return {
          ...state,
          notification: helpers.createNotification(
            messages.LOGIN[action.payload.data.messageCode]
          )
        };
      }

    case actionTypes.LOGOUT:
      return initialState;

    case actionTypes.SIGNUP:
      // Redirects to login page
      if (action.payload.data.isSuccessful) action.history.push('/login');
      return {
        ...state,
        notifications: helpers.createNotification(
          messages.SIGNUP[action.payload.data.messageCode],
          action.payload.data.isSuccessful
        )
      };

    case actionTypes.SET_NOTIFICATION:
      return {
        ...state,
        notification: helpers.createNotification(
          action.payload.message,
          action.payload.isSuccessful
        )
      };

    case actionTypes.CLEAR_NOTIFICATION:
      return { ...state, notification: helpers.createNotification() };

    default:
      return state;
  }
};
