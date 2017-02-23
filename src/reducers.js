import actions from './actions';

export const initialState = {
  user: undefined,
  page: 'home',
  tutors: []
};

const tuberApp = (state = initialState, action) => {
  switch (action.type) {
    case 'AJAX_ERROR':
      console.log(action.payload.error);
      return state;

    case 'LOAD_HOME':
      return Object.assign({}, state, {
        tutors: [],
        status: 'FETCHING..'
      });

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