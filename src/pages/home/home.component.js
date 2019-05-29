import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const Home = ({ user, onSignOutButtonClick }) => {
  return (
    <div>
      Home
      { user &&
        <Button onClick={() => onSignOutButtonClick()}>
          Sign out
        </Button>
      }
    </div>
  )
}

Home.propTypes = {
  user: PropTypes.any,
  onSignOutButtonClick: PropTypes.func
}

export default Home
