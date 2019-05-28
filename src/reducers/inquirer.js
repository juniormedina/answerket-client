import actionTypes from '../actions/types';

const initialState = {
    isValidCompany: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COMPANY_VALIDATE:
      return { ...state, isValidCompany: action.payload.data.isSuccessful };
    default:
      return state;
  }
};
