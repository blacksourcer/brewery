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
    onLoad && onLoad()
  }, [ onLoad ])

  const [ formOpen, setFormOpen ] = useState(false)
  const [ formItem, setFormItem ] = useState(null)

  const classes = useStyles()

  const handleSubmit = (item) => {
    setFormOpen(false)

    item.id
      ? onUpdate && onUpdate(item)
      : onCreate && onCreate(item)
  }

  const handleCreate = () => {
    setFormItem(null)
    setFormOpen(true)
  }

  const handleUpdate = (item) => {
    setFormItem(item)
    setFormOpen(true)
  }

  const handleDelete = (id) => {
    onDelete && onDelete(id)
  }

  return (
    <Container maxWidth='lg'>
      <Fab
        color='primary'
        aria-label='Add'
        className={classes.fab}
        onClick={handleCreate}
      >
        <AddIcon />
      </Fab>
      <NicotinesForm
        open={formOpen}
        item={formItem}
        onClose={() => setFormOpen(false)}
        onSubmit={handleSubmit}
        data-test-id='nicotines_nicotines-form'
      />
      <NicotinesList
        items={items}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        data-test-id='nicotines_nicotines-list'
      />
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
