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
import Error from './error'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'
import Nicotines from '../../pages/nicotines'

import AppToolBar from './app-tool-bar'
import AppDrawer from './app-drawer'

import useStyles from './layout.styles'

const App = ({
  initializing = false,
  loading = false,
  user,
  error,
  onErrorClose,
  onSignOutButtonClick
}) => {
  if (initializing) {
    return (<Loader />)
  }

  const classes = useStyles()

  const [ drawerOpen, setDrawerOpen ] = useState(false)

  const isAuthorized = !!user

  const authorizedComponent = (component) => () => isAuthorized
    ? component
    : <Redirect to='/sign-in' />

  const nonAuthorizedComponent = (component) => () => isAuthorized
    ? <Redirect to='/' />
    : component

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        { isAuthorized &&
          <AppToolBar
            onMenuButtonClick={() => setDrawerOpen(!drawerOpen)}
            onSignOutButtonClick={onSignOutButtonClick}
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
            { loading && <Loader />}
            <Route exact path='/' render={authorizedComponent(<Home />)} />
            <Route exact path='/nicotines' render={authorizedComponent(<Nicotines />)} />
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
  onSignOutButtonClick: PropTypes.func
}

export default App
