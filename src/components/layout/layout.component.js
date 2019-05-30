import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import LayoutAppBar from './layout-app-bar'
import LayoutDrawer from './layout-drawer'

import useStyles from './layout.styles'

const Layout = ({
  user,
  onSignOutButtonClick,
  children
}) => {
  const classes = useStyles()

  const [ drawerOpen, setDrawerOpen ] = useState(false)

  const isAuthorized = !!user

  return (
    <div className={classes.root}>
      <CssBaseline />
      { isAuthorized &&
        <LayoutAppBar
          onDrawerButtonClick={() => setDrawerOpen(!drawerOpen)}
          onSignOutButtonClick={onSignOutButtonClick}
        />
      }
      { isAuthorized &&
        <LayoutDrawer open={drawerOpen} />
      }
      <main className={clsx(classes.content, {
        [classes.contentShift]: drawerOpen
      })}>
        <div className={classes.contentSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          {children}
        </Container>
      </main>
    </div>
  )
}

Layout.propTypes = {
  user: PropTypes.any,
  onSignOutButtonClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
