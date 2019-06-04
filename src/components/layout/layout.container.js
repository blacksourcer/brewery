import { connect } from 'react-redux'

import { setError, signOut } from '../../store/app/actions'

import Layout from './layout.component'

const mapStateToProps = state => ({
  error: state.app.error,
  loading: state.app.loading,
  user: state.app.user
})

const mapDispatchToProps = dispatch => ({
  onErrorClose: () => dispatch(setError(null)),
  onSignOutButtonClick: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
