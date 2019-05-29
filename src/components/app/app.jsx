import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../../pages/home'
import SignIn from '../../pages/sign-in'

import './app.css'

const App = () => (
  <Router>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li><Link to='/sign-in'>Sign In</Link></li>
    </ul>
    <Route exact path='/' component={Home} />
    <Route exact path='/sign-in' component={SignIn} />
  </Router>
)

export default App
