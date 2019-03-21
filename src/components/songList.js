import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedSong from '../actions';

class SongList extends Component {
    songList() {
        return this.props.song.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="content">Title: {song.title}</div>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick = { () => this.props.SelectedSong(song)}
                        >
                            Select.
                        </button>
                    </div>
                </div>
            );
        });
    };

  render() {
    return <div className="ui divided list">{this.songList()}</div>
  }
}

const mapStateToProps = state => {
    return { song : state.song }
}

export default connect(mapStateToProps, {SelectedSong})(SongList);