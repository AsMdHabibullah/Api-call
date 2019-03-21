const SelectedSong = song => {
  return {
      type : 'SELECTED_SONG',
      payload : song
  }
}

export default SelectedSong