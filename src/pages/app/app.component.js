import React from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'

import Header from '../../components/header'

import useStyles from './app.styles'

const App = ({ user }) => {
  const classes = useStyles()
  const isAuthorized = !!user

  const authorizedComponent = (component) => () => isAuthorized
    ? component
    : <Redirect to='/sign-in' />

  const nonAuthorizedComponent = (component) => () => isAuthorized
    ? <Redirect to='/' />
    : component

  return (
    <Router>
      <CssBaseline />
      { isAuthorized && <Header /> }
      <main className={classes.content}>
        <div className={classes.contentSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          <Route exact path='/' render={authorizedComponent(<Home />)} />
          <Route exact path='/sign-in' render={nonAuthorizedComponent(<SignIn />)} />
        </Container>
      </main>
    </Router>
  )
}

App.propTypes = {
  user: PropTypes.any
}

export default App
