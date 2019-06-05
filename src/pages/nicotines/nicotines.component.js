import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'

const Nicotines = ({ items, onLoad }) => {
  useEffect(() => {
    onLoad()
  }, [ onLoad ])

  return (
    <Container maxWidth='lg'>
      { items.map(item => <li key={item.id}>{item.name}</li>)}
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
