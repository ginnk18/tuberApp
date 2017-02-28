import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import types from '../actionTypes';

const API_URL = 'http://localhost:3000/';

const errorHandler = function(dispatch, error, type) {
  let errorMessage = '';

  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

const loginUser = function({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/auth/login`, { email, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

// export function registerUser({ email, firstName, lastName, password }) {
const registerUser = function(registrationParams) {
  return function(dispatch) {
    // axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
    axios.post(`${API_URL}/auth/register`, registrationParams)
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = home;
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

const logoutUser = function() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });

    window.location.href = home;
  }
}

const protectedTest = function() {
  return function(dispatch) {
    axios.get(`${API_URL}/protected`, {
      headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}

const showLoginForm = () => {
  return {
    type: types.LOG_IN,
    payload: { page: "login" }
  }
}

export default {
  errorHandler,
  loginUser,
  registerUser,
  logoutUser,
  protectedTest,
  showLoginForm
}