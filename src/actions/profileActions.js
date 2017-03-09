import Types from './actionTypes';
import axios from 'axios';


export function loadProfile(user_id) {
  console.log('in loadprofile, ', user_id)
  return {
    type: Types.LOAD_PROFILE,
    payload: axios.get(`http://localhost:3000/tutors/${user_id}`)
  }
}

export function subscribeThenProfile(user, profile_id) {
  return function(dispatch, getState) {
    dispatch(subscribeToChat(user, getState()));
    dispatch(loadProfile(profile_id))
  }
}

export function subscribeToChat(user, state) {
  if (!state.cable.channels['NotificationChannel']) {
    return {
      type: Types.SUBSCRIBE_TO_CHAT,
      payload: user
    }
  }
  return {
    type: Types.SUBSCRIBE_TO_CHAT,
    payload: "already subscribed"
  };
}

export function postReview(reviewData) {
  console.log(`http://localhost:3000/tutors/${reviewData.tutor_id}/reviews`)
  return {
    type: Types.POST_REVIEW,
    payload: axios({
      method: "POST",
      url: `http://0.0.0.0:3000/tutors/${reviewData.tutor_id}/reviews`,
      data: reviewData
    })
  }
}

export function sendChat(messg) {
  console.log("message from send chat", messg)
  // const messg = action.payload;
  // state.profile.chatSent = true;
  messg.cable.channels
  .NotificationChannel.perform(
    "newNotification",
    {
      sender_id: messg.sender_id,
      receiver_id: messg.receiver_id,
      message: messg.message,
      username: messg.username
    }
  )
  return {
    type: Types.SEND_CHAT,
    payload: messg
  }
}

export function newNotify(data) {
  return {
    type: Types.NEW_NOTIFY,
    payload: data
  }
}

export function sendSMS(mssg) {
  return {
    type: Types.SEND_SMS,
    payload: axios({
      method: "POST",
      url: `http://0.0.0.0:3000/message/sms`,
      data: mssg
    })
  }
}

export function updateProfile(data) {
  return {
    type: Types.UPDATE_PROFILE,
    payload: axios({
      method: "PUT",
      url: `http://0.0.0.0:3000/tutors/${data.id}`,
      data: data
    })
  }
}

export default {
  loadProfile,
  newNotify,
  postReview,
  sendChat,
  sendSMS,
  subscribeToChat,
  subscribeThenProfile,
  updateProfile
}