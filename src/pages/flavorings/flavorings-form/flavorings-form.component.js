import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import useStyles from './flavorings-form.styles'

const defaultValues = {
  vendor: '',
  name: '',
  pg: 100,
  notes: ''
}

const FlavoringsForm = ({ open, item, onSubmit, onClose }) => {
  const classes = useStyles()

  const [values, setValues] = useState(defaultValues)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    open && setValues(item || defaultValues)
    open && setErrors({})
  }, [open, item])

  const vendorValid = vendor => !!vendor
  const nameValid = name => !!name
  const valid = values => nameValid(values.name)

  const handleVendorChange = e => {
    const value = e.target.value
    const valueValid = vendorValid(value)

    setErrors({
      ...errors,
      vendor: valueValid ? null : 'Vendor required'
    })

    setValues({ ...values, vendor: value })
  }

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
        data-test-id='flavorings-form_form'
      >
        <DialogTitle id='flavorings-form_dialog-title'>
          { item ? `Edit '${item.name}'` : 'Add new flavoring' }
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill-in new entry's details below. Fields marked with '*' are required.
          </DialogContentText>
          <div className={classes.row}>
            <TextField
              name='vendor'
              value={values.vendor || ''}
              required
              error={!!errors.vendor}
              className={classes.textField}
              autoFocus
              label={errors.vendor || 'Vendor'}
              fullWidth
              onChange={handleVendorChange}
              data-test-id='flavorings-form_text-field_vendor'
            />
          </div>
          <div className={classes.row}>
            <TextField
              name='name'
              value={values.name || ''}
              required
              error={!!errors.name}
              className={classes.textField}
              autoFocus
              label={errors.name || 'Title'}
              fullWidth
              onChange={handleNameChange}
              data-test-id='flavorings-form_text-field_name'
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
              data-test-id='flavorings-form_text-field_pg'
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
              data-test-id='flavorings-form_text-field_notes'
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

FlavoringsForm.defaultProps = {
  open: false
}

FlavoringsForm.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    vendor: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    notes: PropTypes.string
  }),
  onSubmit: PropTypes.func,
  onClose: PropTypes.func
}

export default FlavoringsForm
