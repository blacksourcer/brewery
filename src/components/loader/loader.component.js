import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './loader.styles'

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.overlay}>
      <CircularProgress className={classes.progress} />
    </div>
  )
}

export default Loader
