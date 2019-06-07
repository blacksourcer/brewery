import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'

import AddIcon from '@material-ui/icons/Add'

import NicotinesList from './nicotines-list'
import NicotinesForm from './nicotines-form'

import useStyles from './nicotines.styles'

const Nicotines = ({
  items,
  onLoad,
  onCreate,
  onDelete
}) => {
  useEffect(() => {
    onLoad()
  }, [ onLoad ])

  const [ formOpen, setFormOpen ] = useState(false)

  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Fab
        color='primary'
        aria-label='Add'
        className={classes.fab}
        onClick={() => setFormOpen(true)}
      >
        <AddIcon />
      </Fab>
      <NicotinesForm
        open={formOpen}
        onClose={() => setFormOpen(false)}
        onSubmit={onCreate}
      />
      <NicotinesList items={items} onItemDelete={onDelete} />
    </Container>
  )
}

Nicotines.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pg: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      notes: PropTypes.string
    })
  ),
  onLoad: PropTypes.func,
  onCreate: PropTypes.func,
  onDelete: PropTypes.func
}

export default Nicotines
