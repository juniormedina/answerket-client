import actionTypes from '../actions/types';
import helpers from './helpers';
import messages from '../config/messages';

const initialState = {
  notification: {
    message: '',
    isSuccessful: false
  },
  name: 'Cool Company Name',
  number: 2476,
  tickets: [
    {
      status: 0,
      number: 231,
      inquirer: 'Sarah Doe',
      subject: 'I cant find the cancel subscription button.',
      messages: [
        {
          fromInquirer: true,
          text:
            "I tried looking everywhere and I can't seem to find it. Hoping to get a response soon, as my subscription is about to renew",
          date: "Apr 10 2019",
          time: "10:45pm EST"
        }
      ]
    },
    {
      status: 1,
      number: 230,
      inquirer: 'John Smith',
      subject: 'Account Upgrade',
      messages: [
        {
          fromInquirer: true,
          text:
            "Hello, I want to upgrade my accounts vip status.",
          date: "Apr 9 2019",
          time: "02:12pm EST"
        },
        {
          fromInquirer: false,
          text:
            "Hello and thank you for contacting us, can you please send us your account number and associated home address.",
          date: "Apr 9 2019",
          time: "03:10pm EST"
        }
      ]
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      if (action.payload.data.isSuccessful) {
        // Redirects to dashboard
        action.history.push('/dashboard');
        return {
          ...state,
          company: action.payload.data.company,
          number: action.payload.data.number,
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
          number: action.payload.data.number,
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
