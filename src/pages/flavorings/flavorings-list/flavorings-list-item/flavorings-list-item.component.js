import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import useStyles from './flavorings-list-item.styles'

const FlavoringsListItem = ({ item, onUpdate, onDelete }) => {
  const classes = useStyles()

  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography component='h5' variant='h5'>
          {item.vendor}: {item.name}
        </Typography>
        <Typography variant='subtitle1'>
          PG/VG: {item.pg}/{100 - item.pg}.
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {item.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => onUpdate && onUpdate(item)}
          data-test-id='flavorings-list-item_button_edit'
        >
          Edit
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => onDelete && onDelete(item.id)}
          data-test-id='flavorings-list-item_button_delete'
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

FlavoringsListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    vendor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    notes: PropTypes.string
  }).isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
}

export default FlavoringsListItem
