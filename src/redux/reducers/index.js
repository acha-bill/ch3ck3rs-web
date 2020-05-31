import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import authReducer from '../reducers/authReducer';

export default combineReducers({
  routing: routerReducer,
  auth: authReducer
})