import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import useStyles from './nicotines-form.styles'

const NicotinesForm = ({ open = true, item, onSubmit, onClose }) => {
  const classes = useStyles()

  const [values, setValues] = useState(item)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    setValues(item)
  }, [item])

  const nameValid = name => !!name
  const valid = values => nameValid(values.name)

  const handleNameChange = e => {
    const value = e.target.value
    const valueValid = nameValid(value)

    setErrors({
      ...errors,
      name: valueValid ? null : 'Title required'
    })

    setValues({ ...values, name: value })
  }

  const handlePgChange = e => {
    const value = Math.min(parseInt(e.target.value) || 0, 100)
    setValues({ ...values, pg: value })
  }

  const handleStrengthChange = e => {
    const value = Math.min(parseInt(e.target.value) || 0, 1000)
    setValues({ ...values, strength: value })
  }

  const handleChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    onSubmit &&
    valid(values) &&
    onSubmit(values)
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby='nicotines-form_dialog-title'>
      <form
        onSubmit={handleSubmit}
        noValidate
        autoComplete='off'
        data-test-id='nicotines-form_form'
      >
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
              value={values.name}
              required
              error={!!errors.name}
              className={classes.textField}
              autoFocus
              label={errors.name || 'Title'}
              fullWidth
              onChange={handleNameChange}
              data-test-id='nicotines-form_text-field_name'
            />
          </div>
          <div className={classes.row}>
            <TextField
              name='pg'
              type='number'
              value={values.pg}
              required
              className={classes.textField}
              label='PG'
              onChange={handlePgChange}
              data-test-id='nicotines-form_text-field_pg'
            />
            <TextField
              name='vg'
              value={100 - values.pg}
              className={classes.textField}
              label='VG'
              readOnly
              data-test-id='nicotines-form_text-field_vg'
            />
            <TextField
              name='strength'
              type='number'
              value={values.strength}
              required
              className={classes.textField}
              label='Strength, mg/ml'
              onChange={handleStrengthChange}
              data-test-id='nicotines-form_text-field_strength'
            />
          </div>
          <div className={classes.row}>
            <TextField
              name='notes'
              value={values.notes}
              className={classes.textField}
              multiline
              label='Notes'
              fullWidth
              onChange={handleChange}
              data-test-id='nicotines-form_text-field_notes'
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={!valid(values)} type='submit' color='primary'>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
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
  }).isRequired,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
}

export default NicotinesForm
