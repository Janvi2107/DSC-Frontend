//index.js
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import formReducer from './formReducer'; // Ensure you have created formReducer

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  // Add more reducers here as needed
});

export default rootReducer;