import Types from './actionTypes';
import axios from 'axios';
import store from './tutorStore';

const ajaxError = (error) => {
  return {
    type: Types.AJAX_ERROR,
    payload: { error }
  }
}

const loadHome = () => {
  axios.get("http://localhost:3000")
  .then(res => {
    store.dispatch(showHome(res.data));
  })
  .catch(err => {
    store.dispatch(ajaxError(err))
  });

  return {
    type: Types.LOAD_HOME,
    payload: undefined
  }
}

const login = (email, password) => {
  return {
    type: Types.LOG_IN,
    payload: {
      email,
      password
    }
  };
};

const logout = (session_token) => {
  return {
    type: Types.LOG_OUT,
    payload: { session_token }
  }
}

const registerStudent = (serializedData) => {


  return {
    type: Types.REGISTER_STUDENT,
    payload: serializedData
  }
}

const registerTutor = (e) => {
  console.log(e.target.refs)
  axios.post("http://localhost:3000/users", {
    firstName: 'Jeff',
    lastName: 'Scott'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return {
    type: Types.REGISTER_TUTOR,
    payload: false
  }
}

const search = (searchData) => {
  return {
    type: Types.SEARCH,
    payload: {
      searchTerm: searchData.searchTerm,
      filters: searchData.filters
    }
  }
}

const showHome = (tutors) => {
  return {
    type: Types.SHOW_HOME,
    payload: { tutors }
  }
}

const showRegisterTutorForm = () => {
  return {
    type: Types.REGISTER_TUTOR,
    payload: { page: "register_tutor" }
  }
}

export default {
  loadHome,
  login,
  logout,
  registerStudent,
  registerTutor,
  search,
  showHome,
  showRegisterTutorForm
}