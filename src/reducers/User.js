const initialState = {
    isAuthenticated: null,
    notifications: {
      messages: [],
      errors: []
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}