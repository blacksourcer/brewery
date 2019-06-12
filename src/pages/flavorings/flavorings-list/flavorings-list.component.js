import React from 'react'
import PropTypes from 'prop-types'

import FlavoringsListItem from './flavorings-list-item'

const FlavoringsList = ({ items, onUpdate, onDelete }) => {
  return (
    <div>
      { items.map(
        item => (
          <FlavoringsListItem
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
            data-test-id={`flavorings-list_flavorings-list-item_${item.id}`}
          />
        )
      ) }
    </div>
  )
}

FlavoringsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      vendor: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      pg: PropTypes.number.isRequired,
      notes: PropTypes.string
    })
  ),
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
}

export default FlavoringsList
