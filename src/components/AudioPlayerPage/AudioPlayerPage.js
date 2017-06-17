import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/*import AudioList from '../AudioList/AudioList';*/
import AudioPlayer from '../AudioPlayer/AudioPlayer';

class AudioPlayerPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveSongRequest();
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
              songList={this.props.songs}
              currentSongSrc={this.props.currentSongSrc}
              currentSongName={this.props.currentSongName}
              songs={this.props.songs}
              changeSongRequest={this.props.changeSongRequest}
            />
{/*            <AudioList
              songs={this.props.songs}
              changeSongRequest={this.changeAudio}
            />*/}
          </div>
          : null
        }
      </div>
    );
  }
}

AudioPlayerPage.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.object),
  changeSongRequest: PropTypes.func,
  nextSongRequest: PropTypes.func,
  currentSongName: PropTypes.string,
};

export default AudioPlayerPage;
