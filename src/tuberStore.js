import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import actions from './actions';
import reducer from './reducers';

import { ActionCable, Cable } from 'action-cable-react';
import cookie from 'react-cookie';

const actionCable = ActionCable.createConsumer('ws://localhost:3000/cable');
const user_id = cookie.load("user") && cookie.load("user").id.toString();

console.log(user_id)

const cable = new Cable({
  ChatChannel: actionCable.subscriptions.create({
    channel: 'ChatChannel'}, ['newMessage']),
  NotificationChannel: actionCable.subscriptions.create({
    channel: 'NotificationChannel',
    sender_id: user_id || ""}, ['newNotification'])
});
cable["messages"] = [];

const initialState = {
  user: undefined,
  tutors: [],
  error: '',
  message: '',
  content: '',
  authenticated: false,
  profile: {},
  cable
};

const middleware = applyMiddleware(promise(), logger());
const store = createStore(reducer, initialState, middleware);

export default store;