import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

const Home = ({ user }) => {
  return (
    <Container maxWidth='lg'>
      Welcome, {user.email}
    </Container>
  )
}

Home.propTypes = {
  user: PropTypes.any
}

export default Home
