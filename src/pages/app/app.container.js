import { connect } from 'react-redux'

import { setError, signOut } from '../../store/app/actions'

import App from './app.component'

const mapStateToProps = state => ({
  initializing: state.app.initializing,
  loading: state.app.loading,
  error: state.app.error,
  user: state.app.user
})

const mapDispatchToProps = dispatch => ({
  onErrorClose: () => dispatch(setError(null)),
  onSignOutButtonClick: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
