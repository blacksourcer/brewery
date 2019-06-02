import { connect } from 'react-redux'

import { error } from '../../store/app/actions'
import { signOut } from '../../store/user/actions'

import Layout from './layout.component'

const mapStateToProps = state => ({
  error: state.app.error,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  onErrorClose: () => dispatch(error(null)),
  onSignOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
