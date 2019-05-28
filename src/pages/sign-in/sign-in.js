import { connect } from 'react-redux'

import { signIn } from '../../store/user/actions'

import SignIn from './sign-in.jsx'

const mapStateToProps = state => {
  return ({
    user: state.user
  });  
}
const mapDispatchToProps = dispatch => ({
  onFormSubmit: (email, password) => dispatch(signIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
