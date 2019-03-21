import React from 'react'
import SongList from './songList';
import SongDetails from './songDetails';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="ten wide column">
          <div className="ui raised segment">
            <SongList />
          </div>
        </div>
        <div className="six wide column">
          <SongDetails />
        </div>
      </div>
    </div>
  )
}


export default App;