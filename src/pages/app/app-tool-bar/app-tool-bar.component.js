import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

import useStyles from './app-tool-bar.styles'

const AppToolBar = ({
  onMenuButtonClick,
  onSignOutButtonClick
}) => {
  const classes = useStyles()

  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='Menu'
          onClick={onMenuButtonClick}
          data-test-id='app-tool-bar_menu-button'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          Brewery
        </Typography>
        <Button
          color='inherit'
          onClick={onSignOutButtonClick}
          data-test-id='app-tool-bar_sign-out-button'
        >Sign Out</Button>
      </Toolbar>
    </AppBar>
  )
}

AppToolBar.propTypes = {
  onMenuButtonClick: PropTypes.func,
  onSignOutButtonClick: PropTypes.func
}

export default AppToolBar
