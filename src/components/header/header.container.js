import { connect } from 'react-redux'

import { signOut } from '../../store/user/actions'

import Header from './header.component'

const mapDispatchToProps = dispatch => ({
  onSignOutButtonClick: () => dispatch(signOut())
})

export default connect(null, mapDispatchToProps)(Header)
