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

const NicotinesForm = ({ open, item = defaultItem, onSubmit, onClose }) => {
  const classes = useStyles()

  const [currentItem, setCurrentItem] = useState(item)

  React.useEffect(() => {
    setCurrentItem(item)
  }, [item])

  const handleInputChange = e => {
    const { name, value } = e.target
    setCurrentItem({ ...currentItem, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit && onSubmit(currentItem)
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      autoComplete='off'
      data-test-id='nicotines-form_form'
    >
      <Dialog open={open} onClose={onClose} aria-labelledby='nicotines-form_dialog-title'>
        <DialogTitle id='nicotines-form_dialog-title'>
          { item.id ? `Edit '${item.name}'` : 'Add new nicotine' }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill-in new entry's details below. Fields marked with '*' are required.
          </DialogContentText>
          <div className={classes.row}>
            <TextField
              name='name'
              value={currentItem.name}
              className={classes.textField}
              autoFocus
              label='Title'
              fullWidth
              onChange={handleInputChange}
              data-test-id='nicotines-form_text-field_name'
            />
          </div>
          <div className={classes.row}>
            <TextField
              name='pg'
              type='number'
              value={currentItem.pg}
              className={classes.textField}
              label='PG'
              onChange={handleInputChange}
              data-test-id='nicotines-form_text-field_pg'
            />
            <TextField
              name='vg'
              value={100 - currentItem.pg}
              className={classes.textField}
              label='VG'
              readOnly
              data-test-id='nicotines-form_text-field_vg'
            />
            <TextField
              name='strength'
              type='number'
              value={currentItem.strength}
              className={classes.textField}
              label='Strength, mg/ml'
              onChange={handleInputChange}
              data-test-id='nicotines-form_text-field_strength'
            />
          </div>
          <div className={classes.row}>
            <TextField
              name='notes'
              value={currentItem.notes}
              className={classes.textField}
              multiline
              label='Notes'
              fullWidth
              onChange={handleInputChange}
              data-test-id='nicotines-form_text-field_notes'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={onClose}>
            Cancel
          </Button>
          <Button type='submit' color='primary'>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  )
}

NicotinesForm.propTypes = {
  open: PropTypes.bool,
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    notes: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
}

export default NicotinesForm
