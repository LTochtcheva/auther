import axios from 'axios';
//actions
const  SET_CURRENT_USER = 'SET_CURRENT_USER';
//action creators
const setCurrentUser  = user => ({ type: SET_CURRENT_USER, user});
//reducer
export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
      return action.user;

    default:
      return currentUser;
  }
}
//dispatch
export const loginUser = (email, password) => dispatch => {
  axios.post('/api/users/login', {email, password})
  .then(res => dispatch(setCurrentUser(res.data)))
  .catch(err => console.error(`Logging in unsuccesful`, err));
}
