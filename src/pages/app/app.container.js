import { connect } from 'react-redux'

import App from './app.component'

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(App)
