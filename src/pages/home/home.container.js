import { connect } from 'react-redux'

import { signOut } from '../../store/app/actions'

import Home from './home.component'

const mapStateToProps = state => ({
  user: state.app.user
})

const mapDispatchToProps = dispatch => ({
  onSignOutButtonClick: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
