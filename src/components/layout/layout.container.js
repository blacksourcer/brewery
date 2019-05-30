import { connect } from 'react-redux'

import { signOut } from '../../store/user/actions'

import Layout from './layout.component'

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  onSignOutButtonClick: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
