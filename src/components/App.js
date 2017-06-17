import React from 'react';
import Backendless from 'backendless';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { checkLoginInfo } from '../actions/authActions';
import { retrieveSongRequest } from '../actions/AudioPlayerActions';


class App extends React.Component {
  componentWillMount() {
    Backendless.initApp('27BDDDB0-65CC-EEAF-FFE1-FAEDC476EE00', '00B58119-93CC-E0CD-FF14-7F3CAE8BF000', 'v1');

    this.props.checkLoginInfo();
  }
  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkLoginInfo,
    retrieveSongRequest,
  }, dispatch);
}

App.propTypes = {
  checkLoginInfo: PropTypes.func.isRequired,
  retrieveSongRequest: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default connect(null, mapDispatchToProps)(App);
