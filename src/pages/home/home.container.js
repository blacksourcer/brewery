import { connect } from 'react-redux'

import Home from './home.component'

const mapStateToProps = state => ({
  user: state.app.user
})

export default connect(mapStateToProps)(Home)
