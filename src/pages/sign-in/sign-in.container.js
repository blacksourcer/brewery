import { connect } from 'react-redux'

import { signIn } from '../../store/app/actions'

import SignIn from './sign-in.component'

const mapDispatchToProps = dispatch => ({
  onFormSubmit: (email, password) => dispatch(signIn(email, password))
})

export default connect(null, mapDispatchToProps)(SignIn)
