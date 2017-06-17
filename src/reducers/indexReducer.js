import { combineReducers } from 'redux';

import audioPlayer from './audioPlayerReducer';
import auth from './authReducer';


const reducers = {
  audioPlayer,
  auth,
};

const reducer = combineReducers(reducers);


export default reducer;
