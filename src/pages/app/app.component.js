import React from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'

import Layout from '../../components/layout'
import Loader from '../../components/loader'

const App = ({ initializing = false, user }) => {
  if (initializing) {
    return (<Loader />)
  }

  const isAuthorized = !!user

  const authorizedComponent = (component) => () => isAuthorized
    ? component
    : <Redirect to='/sign-in' />

  const nonAuthorizedComponent = (component) => () => isAuthorized
    ? <Redirect to='/' />
    : component

  return (
    <Layout>
      <Router>
        <Route exact path='/' render={authorizedComponent(<Home />)} />
        <Route exact path='/sign-in' render={nonAuthorizedComponent(<SignIn />)} />
      </Router>
    </Layout>
  )
}

App.propTypes = {
  initializing: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}

export default App
