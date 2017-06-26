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
      currentVolume: 1,
    };
  }

  audioPlay = () => {
    this.setState({ songCurrentTime: 0 });
    this.audio.play();
    this.setState({ songsPlay: true });
    setInterval(() => {
      this.setState({ songCurrentTime: this.audio.currentTime });
    }, 700);
    this.setState({ songDuration: this.audio.duration });
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
    this.setState({ currentVolume: e.target.value });
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

  volumeOff = () => {
    this.audio.volume = 0;
    this.setState({ currentVolume: 0 });
  }

  volumeFull = () => {
    this.audio.volume = 1;
    this.setState({ currentVolume: 1 });
  }

  render() {
    return (
      <div>
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
        <div className="songDurationInput">
          <input type="range" min="0" max={this.state.songDuration} value={this.state.songCurrentTime} step="0.1" onChange={this.changeAudioTime} />
        </div>
        {this.state.currentVolume > 0 ?
          <img
            onClick={this.volumeOff}
            height="30"
            width="30"
            src="http://4.bp.blogspot.com/-STWkRnVc6Y8/Vdv4NzVcs1I/AAAAAAAAAqQ/dusfRvIeFL4/s1600/Media-Controls-High-Volume-icon.png"
            alt="volumeFull"
          />
          :
          <img
            onClick={this.volumeFull}
            height="30"
            width="30"
            src="data:image/png;base64,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"
            alt="volumeNull"
          />
        }
        <div className="volumeInput">
          Volume:
          <input type="range" min="0" max="1" step="0.1" value={this.state.currentVolume} onChange={this.changeVolume} />
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
