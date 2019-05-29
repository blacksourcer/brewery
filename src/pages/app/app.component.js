import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'

import Header from '../../components/header'

const App = () => (
  <Router>
    <Header />
    <Route exact path='/' component={Home} />
    <Route exact path='/sign-in' component={SignIn} />
  </Router>
)

export default App
