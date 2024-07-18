import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL } from '../actions/types';

const initialState = {
  formSubmissionStatus: null,
  formSubmissionError: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default formReducer;

