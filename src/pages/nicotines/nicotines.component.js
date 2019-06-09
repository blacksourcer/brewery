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
  onUpdate,
  onDelete
}) => {
  useEffect(() => {
    onLoad()
  }, [ onLoad ])

  const [ formOpen, setFormOpen ] = useState(false)
  const [ editingItem, setEditingItem ] = useState()

  const classes = useStyles()

  const handleNicotinesFormSubmit = (item) => {
    setFormOpen(false)

    item.id
      ? onUpdate && onUpdate(item)
      : onCreate && onCreate(item)
  }

  const handleNicotinesListItemEdit = (id) => {
    const item = items.find(item => item.id === id)

    setEditingItem(item)
    setFormOpen(true)
  }

  const handleNicotinesListItemDelete = (id) => {
    onDelete && onDelete(id)
  }

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
        originalItem={editingItem}
        onClose={() => setFormOpen(false)}
        onSubmit={handleNicotinesFormSubmit}
      />
      <NicotinesList
        items={items}
        onItemEdit={handleNicotinesListItemEdit}
        onItemDelete={handleNicotinesListItemDelete} />
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
}

export default Nicotines
