import { combineReducers } from 'redux';


const SongReducer = () => {
  return [
      { title : 'Yes you can start', duration : '4.50' },
      { title : 'Yes you can come back', duration : '4.30' },
      { title : 'Yes you can start your journy', duration : '4.00' },
      { title : 'Yes you can consider for us', duration : '4.50' }
  ];
}


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SELECTED_SONG'){
        return action.payload;
    }

    return selectedSong;
}


export default combineReducers({
    song : SongReducer,
    selectedSong : selectedSongReducer
});