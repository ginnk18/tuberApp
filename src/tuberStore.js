import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import actions from './actions';
import reducer from './reducers';

const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, middleware);

export default store;