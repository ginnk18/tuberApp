import Types from './actionTypes';
import axios from 'axios';
import store from '../tuberStore';

const showStudRegForm = () => {
  return {
    type: Types.REGISTER_STUDENT,
    payload: { page: "register_student" }
  }
}

export default {
  showStudRegForm
}