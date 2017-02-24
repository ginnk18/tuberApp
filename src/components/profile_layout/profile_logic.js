// Tutor state structure
const tutor = {
  id,              // id from server
  address,         // string without the city / country
  availability,    // array of dates
  avatar,
  city,
  conversations,   // array of conversations had - TODO: define conversation structure
  coordinate,      //  object => {lat: , long: }
  country,
  email,
  experience,      // string e.g. 5years experience tutoring
  first_name,
  primary_subject, // string - a primary subject expertise
  phone,
  qualification,   // string? maybe an array? TODO: decide array or string
  reviews,         // array of review objects. review => {
                   // id, reviewer_firstname, reviewer_avatar, city, country, created_at(mmmm, yyyy)
                   // }
  status,          // string which maps to integer sent from server 'is_available'
                   // status can be one of ['available and online', 'available but offline', 'unavailable']
                   // which maps to 'is_available' which can be [1, 2, 3]
  other_subjects

}