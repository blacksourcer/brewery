import React, { useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'

import LayoutAppBar from './layout-app-bar'
import LayoutDrawer from './layout-drawer'
import LayoutError from './layout-error'

import useStyles from './layout.styles'

const Layout = ({
  user,
  error,
  loading = false,
  onErrorClose,
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
          data-test-id='layout_layout-app-bar'
        />
      }
      { isAuthorized &&
        <LayoutDrawer open={drawerOpen} />
      }
      <main className={clsx(classes.content, {
        [classes.contentLayout]: isAuthorized,
        [classes.contentLayoutDrawerOpen]: isAuthorized && drawerOpen
      })}>
        <div className={classes.contentSpacer} />
        <Container maxWidth='lg' className={classes.container}>
          { loading &&
            <div className={classes.overlay}>
              <CircularProgress className={classes.progress} />
            </div>
          }
          { children }
        </Container>
        { error &&
          <LayoutError
            message={error.message}
            onClose={onErrorClose}
            data-test-id='layout_layout-error'
          />
        }
      </main>
    </div>
  )
}

Layout.propTypes = {
  user: PropTypes.any,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  loading: PropTypes.bool,
  onErrorClose: PropTypes.func,
  onSignOutButtonClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
