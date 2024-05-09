// src/reducer.js
import USER from "./constants";

const initialState = {
  usersData: [],
  isLoading: false,
  isError: false,
  // Other initial state properties
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return { ...state, isLoading: true };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action.payload,
      };
    // Other cases for error handling, etc.
    default:
      return state;
  }
};

export default reducer;
