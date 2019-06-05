import React from 'react'
import PropTypes from 'prop-types'

const NicotinesListItem = ({ item }) => {
  return (
    <li>{item.name} : {item.strength} mg/ml</li>
  )
}

NicotinesListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pg: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    notes: PropTypes.string
  })
}

export default NicotinesListItem
