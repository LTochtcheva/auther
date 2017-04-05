import axios from 'axios';
//actions
const  SET_CURRENT_USER = 'SET_CURRENT_USER';

//action creators
const setCurrentUser  = user => ({ type: SET_CURRENT_USER, user});
//reducer
export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET_CURRENT_USER:
    console.log('user', action.user)
      return action.user;

    default:
      return currentUser;
  }
}
//dispatch
export const loginUser = (user) => dispatch => {
  axios.post('/api/users/login', user)
  .then(foundUser => dispatch(setCurrentUser(foundUser.data)))
  .catch(err => console.error(`Logging in unsuccesful`, err));
}
