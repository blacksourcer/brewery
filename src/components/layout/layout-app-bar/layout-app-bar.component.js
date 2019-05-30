import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './layout-app-bar.styles'

const LayoutAppBar = ({
  onDrawerButtonClick,
  onSignOutButtonClick
}) => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='absolute' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
            onClick={onDrawerButtonClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Brewery
          </Typography>
          <Button color='inherit' onClick={onSignOutButtonClick}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

LayoutAppBar.propTypes = {
  onDrawerButtonClick: PropTypes.func,
  onSignOutButtonClick: PropTypes.func
}

export default LayoutAppBar
