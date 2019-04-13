import actionTypes from '../actions/types';
import helpers from './helpers';
import messages from '../config/messages';

const initialState = {
  isAuthenticated: null,
  notification: {
    message: "There was an error connecting to the server. Please try again later.",
    isSuccessful: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return state;
    case actionTypes.LOGOUT:
      return state;
    case actionTypes.SIGNUP:
      if (action.data.isSuccessful) {
        // Redirect to login page and notify user of successful account creation.
        action.history.push('/login');
        return {
          ...state,
          notifications: helpers.createNotification(
            messages.SUCCESS_SIGNUP,
            true
          )
        };
      }
      return state;

    case actionTypes.SET_NOTIFICATION:
        return { ...state, notification: helpers.createNotification(action.payload.message, action.payload.isSuccessful) };
    case actionTypes.CLEAR_NOTIFICATION:
      return { ...state, notification: helpers.createNotification() };
    default:
      return state;
  }
};
