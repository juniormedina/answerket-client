import actionTypes from '../actions/types';

const initialState = {
    isValidCompany:  true //null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.VALIDATE_COMPANY:
      return { ...state, isValidCompany: action.payload.data.isSuccessful };

      // case actionTypes.INQUIRY_SUBMIT:
      // if(action.payload.data.isSuccessful){
      //   // action.history
      // }
      //   return { ...state }
    default:
      return state;
  }
};
