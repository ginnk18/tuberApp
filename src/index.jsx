// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './tuberStore';
import actions, { profileActions } from './actions';


// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => {
  ReactDOM.render(<App appState={store.getState()}/>, document.getElementById('react-root'));
});

// Dispatch default action
store.dispatch(profileActions.loadProfile(1));
