import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import useStyles from './nicotines-form.styles'

const defaultItem = {
  name: '',
  pg: 100,
  strength: 20
}

const NicotinesForm = ({ open, originalItem = defaultItem, onClose, onSubmit }) => {
  const classes = useStyles()

  const [item, setItem] = useState(originalItem)

  const handleInputChange = e => {
    const { name, value } = e.target
    setItem({ ...item, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit(item)
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='nicotines-form_dialog-title'>
      <DialogTitle id='nicotines-form_dialog-title'>Add new nicotine</DialogTitle>
      <form
        className={classes.container}
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
        data-test-id='nicotines-form_form'
      >
        <DialogContent>
          <DialogContentText>
            Please fill-in new entry's details below
          </DialogContentText>
          <TextField
            name='name'
            value={item.name}
            autoFocus
            margin='dense'
            label='Title'
            fullWidth
            onChange={handleInputChange}
            data-test-id='nicotines-form_text-field_name'
          />
          <TextField
            name='pg'
            type='number'
            value={item.pg}
            label='PG'
            onChange={handleInputChange}
            data-test-id='nicotines-form_text-field_pg'
          />
          <TextField
            name='vg'
            type='number'
            value={100 - item.pg}
            label='VG'
            readOnly
            data-test-id='nicotines-form_text-field_vg'
          />
          <TextField
            name='strength'
            type='number'
            value={item.strength}
            label='Strength'
            onChange={handleInputChange}
            data-test-id='nicotines-form_text-field_strength'
          />
          <TextField
            name='notes'
            value={item.notes}
            multiline
            rows='2'
            label='Notes'
            fullWidth
            onChange={handleInputChange}
            data-test-id='nicotines-form_text-field_notes'
          />
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

NicotinesForm.propTypes = {
  open: PropTypes.bool,
  originalItem: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    notes: PropTypes.string
  }),
  onClose: PropTypes.func,
  onSubmit: PropTypes.func
}

export default NicotinesForm
