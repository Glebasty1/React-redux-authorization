import { Map } from 'immutable';
import constant from '../constants/audioPlayerConstant';

const initialState = Map({
  songs: null,
  currentSongSrc: '',
  currentSongName: '',
});

// Audio player reducer
const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.RETRIEVE_SONG_LIST_SUCCESS:
      return state
        .set('songs', action.payload)
        .set('currentSong', action.payload[0].publicUrl);
    case constant.CHANGE_SONG_REQUEST:
      return state
        .set('currentSongSrc', action.payload.songUrl)
        .set('currentSongName', action.payload.songName);
    default:
      return state;
  }
};

export default audioPlayerReducer;

