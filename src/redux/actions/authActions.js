import { SET_JWT, SET_USER, SET_LOGGED_IN} from './types';

export const setUser =  user => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const setJwt = jwt => {
  console.log('set jwt');
  return{
    type: SET_JWT,
    payload: jwt
  }
}

export const setLoggedIn = loggedIn => {
  return {
    type: SET_LOGGED_IN,
    payload: loggedIn
  }
}