import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import AudioPlayer from '../AudioPlayer/AudioPlayer';

class AudioPlayerPage extends React.Component {
  componentDidMount() {
    this.props.retrieveSongRequest();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  render() {
    return (
      <div className="text-center">
        <h1>Audio Player Page</h1>
        <p>Chose song and tap play</p>
        {
        this.props.songs && this.props.songs.length > 0 ?
          <div>
            <AudioPlayer
              songs={this.props.songs}
              currentSongSrc={this.props.currentSongSrc}
              currentSongName={this.props.currentSongName}
              changeSongRequest={this.props.changeSongRequest}
            />
          </div>
          : null
        }
      </div>
    );
  }
}

AudioPlayerPage.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  currentSongSrc: PropTypes.string,
  changeSongRequest: PropTypes.func,
  currentSongName: PropTypes.string,
  retrieveSongRequest: PropTypes.func,
};

export default AudioPlayerPage;
