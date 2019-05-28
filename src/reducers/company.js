import actionTypes from '../actions/types';
import helpers from './helpers';
import messages from '../config/messages';

const initialState = {
  lastActionSuccessful: false,
  notification: {
    message: '',
    isSuccessful: false
  },
  name: '',
  number: 0,
  tickets: [],
  session: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      if (action.payload.data.isSuccessful) {
        return {
          ...state,
          name: action.payload.data.name,
          number: action.payload.data.number,
          tickets: action.payload.data.tickets,
          session: action.payload.data.session
        };
      }
      return state;

    case actionTypes.LOGIN:
      if (action.payload.data.isSuccessful) {
        return {
          ...state,
          name: action.payload.data.name,
          number: action.payload.data.number,
          tickets: action.payload.data.tickets,
          session: action.payload.data.session
        };
      }
      return {
        ...state,
        notification: helpers.createNotification(
          messages.LOGIN[action.payload.data.messageCode]
        )
      };

    case actionTypes.LOGOUT:
      return initialState;

    case actionTypes.SIGNUP:
      return {
        ...state,
        lastActionSuccessful: action.payload.data.isSuccessful,
        notification: helpers.createNotification(
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

    case actionTypes.CLEAR_LAST_ACTION:
      return { ...state, lastActionSuccessful: false };

    case actionTypes.TICKET_SEND:
      if (action.payload.data.isSuccessful) {
        return {
          ...state,
          tickets: action.payload.data.tickets
        };
      }
      return state;
    default:
      return state;
  }
};
