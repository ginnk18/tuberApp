// import actions from '../actions';

const initialState = {
  user: undefined,
  page: 'home',
  tutors: []
};

const tuberApp = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_HOME_REJECTED':
      console.log(action.payload);
      return state;

    case 'LOAD_HOME_PENDING':
      return Object.assign({}, state, {
        tutors: [],
        status: 'FETCHING..'
      });

    case 'LOAD_HOME_FULFILLED':
      return {
        ...state,
        tutors: action.payload.data,
        status: 'FETCHED'
      };

    case 'REGISTER_TUTOR':
      return Object.assign({}, state, {
        page: 'register_tutor'
      });

    case 'SHOW_HOME':
      return Object.assign({}, state, {
        tutors: action.payload.tutors,
        status: 'FETCHED'
      });

    default:
      return state;
  }
};

export default tuberApp;