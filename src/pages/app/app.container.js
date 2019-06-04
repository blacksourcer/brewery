import { connect } from 'react-redux'

import App from './app.component'

const mapStateToProps = state => ({
  initializing: state.app.initializing,
  user: state.app.user
})

export default connect(mapStateToProps)(App)
