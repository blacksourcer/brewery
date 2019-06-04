import React from 'react'
import PropTypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'
import Nicotines from '../../pages/nicotines'

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
    <Router>
      <Layout>
        <Route exact path='/' render={authorizedComponent(<Home />)} />
        <Route exact path='/nicotines' render={authorizedComponent(<Nicotines />)} />
        <Route exact path='/sign-in' render={nonAuthorizedComponent(<SignIn />)} />
      </Layout>
    </Router>
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
