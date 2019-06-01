import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

import useStyles from './sign-in.styles'

const SignIn = ({ error, onFormSubmit }) => {
  const classes = useStyles()

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onFormSubmit(values.email, values.password)
  }

  const [values, setValues] = useState({ email: '', password: '' })

  return (
    <Container maxWidth='xs'>
      { error &&
        <div>{error}</div>
      }
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          onChange={handleInputChange}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          onChange={handleInputChange}
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
  error: PropTypes.string,
  onFormSubmit: PropTypes.func
}

export default SignIn
