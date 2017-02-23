// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import store from './tutorStore';
import actions from './actions';


// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() => {
  let currState = store.getState();
  console.log(currState)
  ReactDOM.render(<App appState={currState}/>, document.getElementById('react-root'));
});

// Dispatch some actions
store.dispatch(actions.loadHome());
