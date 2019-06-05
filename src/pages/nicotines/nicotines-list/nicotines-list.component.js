import React from 'react'
import PropTypes from 'prop-types'

import NicotinesListItem from './nicotines-list-item'

const NicotinesList = ({ items }) => {
  return (
    <ul>
      { items.map(item => <NicotinesListItem key={item.id} item={item} />)}
    </ul>
  )
}

NicotinesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pg: PropTypes.number.isRequired,
      strength: PropTypes.number.isRequired,
      notes: PropTypes.string
    })
  )
}

export default NicotinesList
