import React from 'react';
import { connect } from 'react-redux';


const SongDetails = ({song}) => {

  if(!song){
    return <div className="ui segment">You can select a song for your favorite.</div>
  }

  return(
  <div className="ui segment">
    <div>Title: {song.title}</div>
    <div>Durations: {song.duration} min.</div>
  </div>

  );
}

const mapStateToProps = state => {
    return { song : state.selectedSong }
};

export default connect(mapStateToProps)(SongDetails);