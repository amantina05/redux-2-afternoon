import axios from 'axios';

const intialState = {
  email: null,
  fistName: null,
  lastName: null,
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export function requestUserData() {
  let data = axios.get('/auth/user-data').then(results => results.data);
  return {
    type: REQUEST_USER_DATA,
    payload: data,
  };
}

function reducer(state = intialState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA + '_FULFILLED':
      const { email, firstName, lastName } = action.payload.user;
      return { email, firstName, lastName };
    default:
      return state;
  }
}

export default reducer;
