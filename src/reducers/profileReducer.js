import { transformToProfileState } from '../components/profile_layout/profile_logic';
import cookie from 'react-cookie';
const user = cookie.load('user');

export default function profileReducer(state, action) {

  switch (action.type) {
    case "LOAD_PROFILE_FULFILLED":
      return {
        ...state,
        page: "profile",
        profile: transformToProfileState(action.payload.data),
        status: "FETCHED",
      };

    case "LOAD_PROFILE_PENDING":
      return {
        ...state,
        profile: {},
        status: "FETCHING"
      };

    case "LOAD_PROFILE_REJECTED":
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        profile: {},
        status: "REJECTED"
      };

    case "NEW_NOTIFY":
      const loggedIn = cookie.load("user");
      const mssg = action.payload;
      console.log("message", mssg)
      console.log("[mssg]", [mssg])
      const chatPatner = (Number(loggedIn.id) === Number(mssg.receiver_id)) ? mssg.sender_id : mssg.receiver_id
      let temp = state.cable.messages[chatPatner];
      if (temp) {
        temp.push(mssg)
      } else { temp = [mssg] }

      console.log("chatPat", chatPatner)
      console.log("cable.mess", state.cable.messages)
      console.log("temp",temp)
      return {
        ...state,
        cable: {...state.cable, messages: {[chatPatner]: temp }},
        status: "MESSAGE APPENDED"
      }

    case "POST_REVIEW_FULFILLED":
      const updatedProfile = state.profile
      updatedProfile.reviews = action.payload.data
      return {
        ...state,
        error: undefined,
        page: "profile",
        profile: updatedProfile,
        status: "FETCHED"
      };

    case "POST_REVIEW_PENDING":
    console.log(state)
      return {
        ...state,
        status: "FETCHING"
      };

    case "POST_REVIEW_REJECTED":
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        status: "REJECTED"
      };

    case "SEND_CHAT":
      return {
        ...state,
        profile: {...state.profile, chatSent: true },
        status: "CHAT SENT"
      };

    case "SEND_SMS_FULFILLED":
      return {
        ...state,
        profile: {...state.profile, offlineSent: true },
        status: "SMS SENT"
      };

    case "SEND_SMS_REJECTED":
      return {
        ...state,
        profile: {...state.profile, offlineError: true },
        status: "SMS ERROR"
      }

    case "SUBSCRIBE_TO_CHAT":
      if (cookie.load("user")) {
        state.cable.setChannel('NotificationChannel', state.actionCable.subscriptions.create(
          {
            channel: 'NotificationChannel',
            sender_id: cookie.load("user").id
          },
          ['newNotification']
        ));
      }
      return {
        ...state,
        status: "SUBSCRIBED TO NOTIFICATION"
      }

    case "UPDATE_PROFILE_FULFILLED":
      return {
        ...state,
        profile: transformToProfileState(action.payload.data),
        status: "PROFILE UPDATED"
      }

    default:
      return state;
  }
};