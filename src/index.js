import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';

import SignUpForm from './components/SignUpForm/index';
import MainPage from './components/MainPage/index';
import LoginForm from './components/LoginForm/index';
import EditProfileForm from './components/ProfilePage/index';
import AudioPlayerPage from './components/AudioPlayerPage/index';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/login" component={LoginForm} />
        <Route path="/sign-up" component={SignUpForm} />
        <Route path="/main" component={MainPage}>
          <IndexRoute component={AudioPlayerPage} />
          <Route path="/profile" component={EditProfileForm} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
