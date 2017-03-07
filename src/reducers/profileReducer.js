import { transformToProfileState } from '../components/profile_layout/profile_logic';

export default function profileReducer(state, action) {
  switch (action.type) {
    case "LOAD_PROFILE_FULFILLED":
      return {
        ...state,
        page: "profile",
        profile: transformToProfileState(action.payload.data),
        status: "FETCHED"
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
      state.cable.messages.push(action.payload)
      return {
        ...state,
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
      state.profile.chatSent = true;
      return {
        ...state,
        status: "CHAT SENT"
      };

    case "SEND_SMS_FULFILLED":
      state.profile.offlineSent = true;
      return {
        ...state,
        status: "SMS SENT"
      };

    case "SEND_SMS_REJECTED":
      state.profile.offlineError = true;
      return {
        ...state,
        status: "SMS ERROR"
      }

    case "UPDATE_PROFILE_FULFILLED":
      return {
        ...state,
        profile: action.payload.data,
        status: "PROFILE UPDATED"
      }

    default:
      return state;
  }
};