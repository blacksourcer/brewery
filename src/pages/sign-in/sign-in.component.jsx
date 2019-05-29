import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const SignIn = ({ user, onFormSubmit }) => {
  if (user) {
    return (
      <div>{user.email}</div>
    )
  }
  return (
    <Button variant='contained' color='primary' onClick={
      (e) => onFormSubmit('blacksourcer@gmail.com', '')
    }>
      Sign In
    </Button>
  )
}

SignIn.propTypes = {
  user: PropTypes.any,
  onFormSubmit: PropTypes.func
}

export default SignIn
