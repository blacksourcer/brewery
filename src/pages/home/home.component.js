import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

const Home = ({ user }) => {
  return (
    <Container maxWidth='lg'>
      Welcome, {user ? `${user.id}: ${user.email}` : 'Anon'}
    </Container>
  )
}

Home.propTypes = {
  user: PropTypes.any
}

export default Home
