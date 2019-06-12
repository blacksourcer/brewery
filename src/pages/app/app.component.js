import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import Loader from '../../components/loader'
import Error from '../../components/error'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'
import Nicotines from '../../pages/nicotines'
import Flavorings from '../../pages/flavorings'

import AppToolBar from './app-tool-bar'
import AppDrawer from './app-drawer'

import useStyles from './app.styles'

const App = ({
  initializing = false,
  loading = false,
  user,
  error,
  onErrorClose,
  onSignOut
}) => {
  const classes = useStyles()

  const [ drawerOpen, setDrawerOpen ] = useState(false)

  const isAuthorized = !!user

  const authorizedComponent = (component) => () => isAuthorized
    ? component
    : <Redirect to='/sign-in' />

  const nonAuthorizedComponent = (component) => () => isAuthorized
    ? <Redirect to='/' />
    : component

  if (initializing) {
    return (<Loader />)
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        { isAuthorized &&
          <AppToolBar
            onMenu={() => setDrawerOpen(!drawerOpen)}
            onSignOut={onSignOut}
            data-test-id='app_app-tool-bar'
          />
        }
        { isAuthorized &&
          <AppDrawer open={drawerOpen} />
        }
        <main className={clsx(classes.content, {
          [classes.contentLayout]: isAuthorized,
          [classes.contentLayoutDrawerOpen]: isAuthorized && drawerOpen
        })}>
          <div className={classes.contentSpacer} />
          <Container maxWidth='lg' className={classes.container}>
            { loading && <Loader /> }
            <Route exact path='/' render={authorizedComponent(<Home />)} />
            <Route exact path='/nicotines' render={authorizedComponent(<Nicotines />)} />
            <Route exact path='/flavorings' render={authorizedComponent(<Flavorings />)} />
            <Route exact path='/sign-in' render={nonAuthorizedComponent(<SignIn />)} />
          </Container>
          { error &&
            <Error
              message={error.message}
              onClose={onErrorClose}
              data-test-id='app_error'
            />
          }
        </main>
      </div>
    </Router>
  )
}

App.propTypes = {
  initializing: PropTypes.bool,
  loading: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  onErrorClose: PropTypes.func,
  onSignOut: PropTypes.func
}

export default App
