import Types from './actionTypes';
import axios from 'axios';


export function loadProfile(user_id) {
  return {
    type: Types.LOAD_PROFILE,
    payload: axios.get(`http://localhost:3000/tutors/${user_id}`)
  }
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

export default {
  loadProfile,
  postReview
}