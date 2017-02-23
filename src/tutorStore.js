import { applyMiddleware, createStore } from 'redux';
import actions from './actions';
import tuberApp, { initialState } from './reducers';

const middleware = applyMiddleware
const store = createStore(tuberApp, initialState);

export default store;