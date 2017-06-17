import constant from '../constants/authConstants';
import Backendless from 'backendless';
import { browserHistory } from 'react-router';

/*
 * action creators
 */

// SignOut actions
const signOutSuccess = () => ({
  type: constant.SIGN_OUT_SUCCESS,
});

const signOutError = () => ({
  type: constant.SIGN_OUT_ERROR,
});

const signOutRequest = () => (dispatch) => {
  Backendless.UserService.logout(new Backendless.Async(
    (success) => {
      browserHistory.push('/login');
      dispatch(signOutSuccess());
    },
    error => dispatch(signOutError()),
  ));
};

// Edit profile actions
const editProfileSuccess = editProfileInputs => ({
  type: constant.EDIT_PROFILE_SUCCESS,
  payload: editProfileInputs,
});

const editProfileError = error => ({
  type: constant.EDIT_PROFILE_ERROR,
  payload: error,
});

const editProfileRequest = editProfileData => (dispatch) => {
  const login = editProfileData.login;
  const email = editProfileData.email;
  const password = editProfileData.password;
  const user = Backendless.UserService.getCurrentUser();
  user.login = login;
  user.email = email;
  user.password = password;

  Backendless.UserService.update(user, new Backendless.Async(
    (success) => {
      Backendless.UserService.logout(new Backendless.Async(
        (success) => {
          browserHistory.push('/login');
          dispatch(signOutSuccess());
        },
        error => dispatch(signOutError()),
      ));
      dispatch(editProfileSuccess({ login, email, password }));
    },
    error => dispatch(editProfileError(error.message)),
  ));
};

// Log in actions
const logInSuccess = loginData => ({
  type: constant.LOG_IN_SUCCESS,
  payload: loginData,
});

const logInError = (error) => {
  return {
    type: constant.LOG_IN_ERROR,
    payload: error,
  };
};

const logInRequest = loginData => (dispatch) => {
  const email = loginData.email;
  const password = loginData.password;
  Backendless.UserService.login(email, password, true, new Backendless.Async(
    (success) => {
      dispatch(logInSuccess({ email, password }));
      browserHistory.push('/main');
    },
    error => dispatch(logInError(error.message)),
  ));
};


const checkLoginInfo = () => (dispatch) => {
  // getCurrentUser
  const currentUser = Backendless.UserService.getCurrentUser();

  if (currentUser) {
    browserHistory.push('/main');
  } else {
    browserHistory.push('/login');
  }
};

// Sign up actions
const signUpSuccess = signUpData => ({
  type: constant.SIGN_UP_SUCCESS,
  payload: signUpData,
});

const signUpError = error => ({
  type: constant.SIGN_UP_ERROR,
  payload: error,
});

const signUpRequest = signUpData => (dispatch) => {
  const login = signUpData.login;
  const email = signUpData.email;
  const password = signUpData.password;

  const user = new Backendless.User();
  user.login = login;
  user.email = email;
  user.password = password;


  Backendless.UserService.register(user, new Backendless.Async(
    (success) => {
      browserHistory.push('/login');
      dispatch(signUpSuccess({ login, email, password }));
    },
    error => dispatch(signUpError(error.message)),
  ));
};

export {
  signUpRequest,
  logInRequest,
  checkLoginInfo,
  editProfileRequest,
  signOutRequest,
};
