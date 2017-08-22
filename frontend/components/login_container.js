import { connect } from 'react-redux';
import Login from './login';
import { login, signup, logout } from '../actions/session_actions';
import { receiveModal, removeModal } from '../actions/ui_actions';


const mapStateToProps = (state) => {
  return({
    currentUser: state.session.currentUser,
    modalBool: state.ui.modalOpen
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    login: (user) => dispatch(login(user)),
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    receiveModal: () => dispatch(receiveModal()),
    removeModal: () => dispatch(removeModal())
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);
