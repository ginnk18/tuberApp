// import { combineReducers } from 'redux';

import appWide from './appWide';
import profileReducer from './profileReducer';

function rootReduce(reducers) {
  return (state, action) => {
    let newState;
    Object.keys(reducers).forEach((reducer) => {
      newState = {
        ...newState,
        ...reducers[reducer](newState, action)
      }
    });
    return newState;
  }
}

export default rootReduce({
  appWide,
  profileReducer
})