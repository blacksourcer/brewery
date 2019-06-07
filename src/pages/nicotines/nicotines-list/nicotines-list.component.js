import React from 'react'
import PropTypes from 'prop-types'

import NicotinesListItem from './nicotines-list-item'

const NicotinesList = ({ items, onItemDelete }) => {
  const handleItemDelete = (id) => onItemDelete && onItemDelete(id)

  return (
    <div>
      { items.map(
        item => (
          <NicotinesListItem
            key={item.id}
            item={item}
            onDeleteButtonClick={() => handleItemDelete(item.id)}
            data-test-id={`nicotines-list_nicotines-list-item_${item.id}`}
          />
        )
      ) }
    </div>
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
  ),
  onItemDelete: PropTypes.func
}

export default NicotinesList
