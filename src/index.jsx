// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

import types from './actions/actionTypes';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ChatApp from './components/profile_layout/messaging/ChatApp.jsx';
import store from './tuberStore';
import actions, { profileActions, tutorActions } from './actions';
import cookie from 'react-cookie';


// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  ReactDOM.render(<App cable={store.getState().cable} appState={store.getState()}/>, document.getElementById('react-root'));
  ReactDOM.render(<ChatApp cable={store.getState().cable}
    profile={store.getState().profile} />,
    document.getElementById('chat-root'))
});

const token = cookie.load('token');
if (token) {
  store.dispatch({ type: types.AUTH_USER });
}

// Dispatch default action
store.dispatch(profileActions.loadProfile(12 + Math.ceil(Math.random() * 2)));

// store.dispatch(tutorActions.loadHome());
