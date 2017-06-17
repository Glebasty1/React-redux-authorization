import { connect } from 'react-redux';

import { signOutRequest } from '../../actions/authActions';
import MainPage from './MainPage';


const mapDispatchToProps = dispatch => ({
  handleSignOut: () => {
    dispatch(signOutRequest());
  },
});

export default connect(null, mapDispatchToProps)(MainPage);

