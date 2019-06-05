import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import useStyles from './nicotines-list-item.styles'

const NicotinesListItem = ({ item }) => {
  const classes = useStyles()

  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography component='h5' variant='h5'>
          {item.name}
        </Typography>
        <Typography variant='subtitle1'>
          PG/VG Ratio: {item.pg}/{100 - item.pg}. Strength: {item.strength}.
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {item.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' color='primary'>
          Edit
        </Button>
        <Button size='small' color='primary'>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

NicotinesListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    notes: PropTypes.string
  })
}

export default NicotinesListItem
