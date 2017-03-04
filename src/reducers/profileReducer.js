import { transformToProfileState } from '../components/profile_layout/profile_logic';

const initialState = {
  page: "profile",
  profile: {}
}

export default function profileReducer(state = initialState, action) {
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

    default:
      return state;
  }
};