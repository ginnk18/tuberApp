import { transformToProfileState } from "./profile_logic";


const serverTutor = {
  "id":1,
  "education":"BA Sociology",
  "experience":"5 years tutoring",
  "email":"blah@blah.com",
  "phone":"14037709052",
  "hours":{m: '9-5', tu: '9-5', we: '9-5', th: '9-5', fr: '9-5', sa: '9-5', su: '9-5'},
  "rate_cents":3000,
  "current_location": {country: 'Canada', city: 'Calgary', long: 100, lat: 60},
  "is_available":2,
  "subjects_taught":[3, 7],
  "created_at":"2017-02-22T23:42:10.403Z",
  "updated_at":"2017-02-22T23:42:10.403Z",
  "avatar":"assets/images/default_profile_images_default_profile_6_400x400.png",
  "name":"Julio Coolio",
  "user_id": null
};

test("transforming tutor data from the api to profile state object", () => {
  expect(transformToProfileState(serverTutor)).toEqual({
    id: 1,
    address: undefined,
    availability: {m: '9-5', tu: '9-5', we: '9-5', th: '9-5', fr: '9-5', sa: '9-5', su: '9-5'},
    avatar: "/images/default_profile_images_default_profile_6_400x400.png",
    city: "Calgary",
    conversations: undefined,
    coordinate: {long: 100, lat: 60},
    country: "Canada",
    email: "blah@blah.com",
    experience: "5 years tutoring",
    first_name: "Julio",
    joined_date: "February, 2017",
    phone: "+1-403-770-9052",
    education: "BA Sociology",
    rate: "$30/hr",
    reviews: undefined,
    status: "available but offline",
    subjects: [3, 7],
    user_id: null
  });
});