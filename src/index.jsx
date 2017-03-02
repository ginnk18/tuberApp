// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

import types from './actions/actionTypes';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './tuberStore';
import cookie from 'react-cookie';
import actions, { profileActions, tutorActions } from './actions';


// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  ReactDOM.render(<App appState={store.getState()}/>, document.getElementById('react-root'));
});

const token = cookie.load('token');
if (token) {
  store.dispatch({ type: types.AUTH_USER });
}

// Dispatch default action
store.dispatch(profileActions.loadProfile(1));
