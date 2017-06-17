import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    const login = this.state.login;
    const email = this.state.email;
    const password = this.state.password;

    this.props.editProfileRequest({ login, email, password });

    this.setState({
      login: '',
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
        <h1 className="text-center">Edit Profile Form</h1>
        <div className="col-md-4" />
        <div className="col-md-4 col-md-offset4">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <h4 className="bg-danger error-box text-center">{this.props.editProfileError}</h4>
              <h4>New UserName</h4>
              <input
                className="form-control"
                value={this.state.login}
                onChange={e => this.handleInputChange('login', e.target.value)}
                name="login"
                type="text"
                placeholder="Login"
                required
              />
              <div className="field">
                <h4>New E-mail</h4>
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
                <h4>New Password</h4>
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
              <div>
                <br />
                <button className="btn btn-sm btn-success" type="submit">
              Save
            </button>
              </div>
            </div>
          </form>
          <br />
        </div>
      </div>
    );
  }
}

EditProfileForm.propTypes = {
  editProfileRequest: PropTypes.func.isRequired,
  editProfileError: PropTypes.string,
};

export default EditProfileForm;

