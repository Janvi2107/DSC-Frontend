// reducers/authReducer.js

import { LOGIN, LOGOUT, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  formSubmissionStatus: null,
  formSubmissionError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        formSubmissionStatus: 'success',
        formSubmissionError: null,
      };
    case SUBMIT_FORM_FAIL:
      return {
        ...state,
        formSubmissionStatus: 'fail',
        formSubmissionError: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
