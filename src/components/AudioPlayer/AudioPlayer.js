import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songDuration: 0,
      songCurrentTime: 0,
      songsPlay: false,
    };
  }

  audioPlay = () => {
    this.setState({ songCurrentTime: 0 });
    this.audio.play();
    this.setState({ songsPlay: true });
    setInterval(() => {
      this.setState({ songCurrentTime: this.audio.currentTime });
    }, 700);
    this.setState({ songDuration: this.audio.duration.toFixed(1) });
  }


  stopAudio = () => {
    this.audio.load();
    this.setState({ songsPlay: false });
  }

  audioPause = () => {
    this.audio.pause();
    this.setState({ songsPlay: false });
  }


  changeVolume = (e) => {
    this.audio.volume = e.target.value;
  }

  changeAudioTime = (e) => {
    this.audio.currentTime = e.target.value;
    this.setState({ songCurrentTime: e.target.value });
  }

  changeAudio = (nextSong) => {
    this.audio.load();
    this.props.changeSongRequest(nextSong);
    this.setState({ songCurrentTime: 0, songsPlay: false });
  }

  render() {
    return (
      <div>
        <div className="songDurationInput">
          <input type="range" min="0" max={this.state.songDuration} value={this.state.songCurrentTime} step="0.1" onChange={this.changeAudioTime} />
        </div>
        {this.state.songsPlay ?
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsxdj--EjI2IMafwcBQAz19kjF5knq4s6IDgyKKxLRbWBw2oIJA7eMFVE"
            alt="pause"
            width="30"
            height="30"
            onClick={this.audioPause}
          /> :
          <img
            className="images"
            onClick={this.audioPlay}
            src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-play-128.png"
            width="30"
            height="30"
            alt="play"
          />
        }
        <img
          className="images"
          onClick={this.stopAudio}
          width="20"
          height="20"
          src="https://cdn3.iconfinder.com/data/icons/dev-basic/512/stop-512.png"
          alt="stop"
        />
        <div className="volumeInput">
          Volume:
          <input type="range" min="0" max="1" step="0.1" onChange={this.changeVolume} />
        </div>
        <div>{this.props.currentSongName}</div>
        <br />
        <audio ref={(audio) => { this.audio = audio; }}>
          <source src={this.props.currentSongSrc} type="audio/ogg" />
            Your browser does not support the audio element.
        </audio>
        <ul>
          {
            this.props.songs && this.props.songs.length > 0
              ? this.props.songs.map(song => <div className="alert alert-success songBox" onClick={() => { this.changeAudio({ songUrl: song.publicUrl, songName: song.name }); }} key={song.createdOn}>{song.name}</div>)
              : null
          }
        </ul>
      </div>
    );
  }
}

AudioPlayer.PropTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  currentSongSrc: PropTypes.string,
  currentSongName: PropTypes.string,
  changeSongRequest: PropTypes.func,
};

export default AudioPlayer;
