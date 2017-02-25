import Types from './actionTypes';
import axios from 'axios';

const sampleTutor = {
  id: 1,
  address: undefined,
  availability: {m: '9-5', tu: '9-5', we: '9-5', th: '9-5', fr: '9-5', sa: '9-5', su: '9-5'},
  avatar: "http://localhost:3000/images/default_profile_images_default_profile_6_400x400.png",
  city: "Calgary",
  conversations: [],
  coordinate: {long: 100, lat: 60},
  country: "Canada",
  email: "blah@blah.com",
  experience: "5 years tutoring",
  first_name: "Julio",
  joined_date: "February, 2017",
  phone: "+1-403-770-9052",
  education: "BA Sociology",
  rate: "$30/hr",
  reviews: [],
  status: { text: "available but offline", color: "#dddd11" },
  subjects: [3, 7],
  summary: "Sed blandit sollicitudin dapibus. Sed justo ligula, congue a accumsan ut,\
          dignissim at metus. Nullam consectetur tempus velit quis tincidunt.\
          Vestibulum fringilla arcu eu felis",
  user_id: null
}

export function loadProfile(user_id) {
  return {
    type: Types.LOAD_PROFILE,
    payload: {data: sampleTutor}//axios.get(`http://localhost:3000/users/${user_id}`)
  }
}

export default {
  loadProfile
}