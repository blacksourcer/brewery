import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'

import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

import useStyles from './layout-error.styles'

const LayoutError = ({ message, onClose }) => {
  const [ open, setOpen ] = useState(true)

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  const classes = useStyles()

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      onClose={handleClose}
      data-test-id='layout-error_snackbar'
    >
      <SnackbarContent
        className={classes.content}
        aria-describedby='client-snackbar'
        message={
          <span className={classes.message}>
            <ErrorIcon className={classes.iconVariant} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key='close'
            aria-label='Close'
            color='inherit'
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  )
}

LayoutError.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func
}

export default LayoutError
