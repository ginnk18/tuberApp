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
        profile: action.payload.data,
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

    default:
      return state;
  }
};