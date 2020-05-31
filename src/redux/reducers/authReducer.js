import { SET_JWT, SET_USER, SET_LOGGED_IN } from '../actions/types';

const INITIAL_STATE = {
  user: null,
  jwt: null,
  isLoggedIn: false
};


export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case SET_USER:
      localStorage.setItem('user', action.payload);
      return {...state, user: JSON.stringify(action.payload)};
    case SET_JWT:
      localStorage.setItem('jwt', action.payload.jwt);
      return {...state, jwt: action.payload};
    case SET_LOGGED_IN:
      return {...state, isLoggedIn: action.payload};
    default:
      return state;
  }
};