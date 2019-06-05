import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

import NicotinesList from './nicotines-list'

const Nicotines = ({ items, onLoad }) => {
  useEffect(() => {
    onLoad()
  }, [ onLoad ])

  return (
    <Container maxWidth='lg'>
      <NicotinesList items={items} />
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
  onLoad: PropTypes.func
}

export default Nicotines
