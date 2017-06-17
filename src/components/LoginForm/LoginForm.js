import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import './styles.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    this.props.handleLogin({ email, password });

    this.setState({
      email: '',
      password: '',
    });
  };

  handleInputChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <div className="row">
        <h1 className="text-center">Login Form</h1>
        <div className="col-md-4" />
        <div className="col-md-4 col-md-offset4">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <h4 className="bg-danger text-center error-box">{this.props.logInError}</h4>
              <h4>E-mail</h4>
              <input
                className="form-control"
                value={this.state.email}
                onChange={e => this.handleInputChange('email', e.target.value)}
                name="email"
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
            <div className="field">
              <h4>Password</h4>
              <input
                className="form-control"
                value={this.state.password}
                onChange={e => this.handleInputChange('password', e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <div>
              <button className="btn btn-sm btn-success" type="submit">Log
              in
            </button>
              <Link to="/sign-up">
                <button className="btn btn-sm btn-success" id="sign-up">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  logInError: PropTypes.string,
};

export default LoginForm;
