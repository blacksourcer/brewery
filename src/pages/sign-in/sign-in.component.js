import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

import useStyles from './sign-in.styles'

const SignIn = ({ onSubmit }) => {
  const classes = useStyles()

  const [values, setValues] = useState({ email: '', password: '' })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(values.email, values.password)
  }

  return (
    <Container maxWidth='xs'>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleSubmit}
        data-test-id='sign-in_form'
      >
        <TextField
          name='email'
          margin='normal'
          required
          fullWidth
          label='Email Address'
          autoComplete='email'
          autoFocus
          onChange={handleInputChange}
          data-test-id='sign-in_text-field_email'
        />
        <TextField
          name='password'
          type='password'
          margin='normal'
          required
          fullWidth
          label='Password'
          autoComplete='current-password'
          onChange={handleInputChange}
          data-test-id='sign-in_text-field_password'
        />
        <Button
          type='submit'
          fullWidth
          color='primary'
          variant='contained'
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='#' variant='body2'>
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

SignIn.propTypes = {
  onSubmit: PropTypes.func
}

export default SignIn
