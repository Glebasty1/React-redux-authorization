import { Map } from 'immutable';
import constant from '../constants/authConstants';

const initialState = Map({
  errors: Map({
    editProfileError: null,
    logInError: null,
    signUpError: null,
  }),
  editProfileInputs: null,
  loginInputs: null,
  signUpInputs: null,
});

// Authorization reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.LOG_IN_SUCCESS:
      return state
        .setIn(['errors', 'logInError'], null)
        .set('loginInputs', action.payload);
    case constant.LOG_IN_ERROR:
      return state
        .setIn(['errors', 'logInError'], action.payload);
    case constant.EDIT_PROFILE_SUCCESS:
      return state
        .setIn(['errors', 'editProfileError'], null)
        .set('editProfileInputs', action.payload);
    case constant.EDIT_PROFILE_ERROR:
      return state
        .setIn(['errors', 'editProfileError'], action.payload);
    case constant.SIGN_OUT_SUCCESS:
      return state;
    case constant.SIGN_OUT_ERROR:
      return state;
    case constant.SIGN_UP_SUCCESS:
      return state
        .setIn(['errors', 'signUpError'], null)
        .set('signUpInputs', action.payload);
    case constant.SIGN_UP_ERROR:
      return state
        .setIn(['errors', 'signUpError'], action.payload);
    default:
      return state;
  }
};

export default authReducer;

