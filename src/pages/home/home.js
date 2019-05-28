import { connect } from 'react-redux'

import { signOut } from '../../store/user/actions'

import Home from './home.jsx'

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onSignOutButtonClick: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)
