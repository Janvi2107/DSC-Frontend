import axios from 'axios';
import { SUBMIT_FORM_SUCCESS, SUBMIT_FORM_FAIL } from './types';

export const submitForm = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/form/submit', formData);
    dispatch({
      type: SUBMIT_FORM_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_FORM_FAIL,
      payload: { error: error.message },
    });
  }
};
