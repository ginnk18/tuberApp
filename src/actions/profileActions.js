import Types from './actionTypes';
import axios from 'axios';


export function loadProfile(user_id) {
  return {
    type: Types.LOAD_PROFILE,
    payload: axios.get(`http://localhost:3000/tutors/${user_id}`)
  }
}

export function postReview(reviewData) {
  return {
    type: Types.POST_REVIEW,
    payload: axios.post({
      url: `http://localhost:3000/tutors/${reviewData.tutor_id}/reviews`,
      data: reviewData
    })
  }
}

export default {
  loadProfile,
  postReview
}