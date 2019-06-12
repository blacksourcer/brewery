import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

import useStyles from './empty-label.styles'

const EmptyLabel = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.text}>
      <Typography variant='h3'>
        {children}
      </Typography>
    </div>
  )
}

EmptyLabel.propTypes = {
  children: PropTypes.node.isRequired
}

export default EmptyLabel
