import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import './styles.css';

class MainPage extends React.Component {

  handleSubmit = (e) => {
    this.props.handleSignOut();
  };
  render() {
    return (
      <div id="wrapper" className="active">
        <div id="sidebar-wrapper">
          <ul id="sidebar_menu" className="sidebar-nav">
            <li className="sidebar-brand">
              <Link to="/main">Sidebar</Link>
            </li>
          </ul>
          <ul className="sidebar-nav" id="sidebar">
            <li>
              <Link to="/profile">
              Edit Profile
            </Link>
            </li>
            <li>
              <Link to="/main">Super Audio Player</Link>
            </li>
            <li><a onClick={this.handleSubmit}>Sign out</a></li>
          </ul>
        </div>
        <div id="page-content-wrapper">
          <div className="page-content inset">
            <div className="row">
              <div className="col-md-12">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default MainPage;
