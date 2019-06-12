import React from 'react'
import PropTypes from 'prop-types'

import EmptyLabel from '../../../components/empty-label'

import NicotinesListItem from './nicotines-list-item'

const NicotinesList = ({ items, onUpdate, onDelete }) => {
  return (
    <div>
      { !items.length && <EmptyLabel>No Nicotines</EmptyLabel> }
      { items.map(
        item => (
          <NicotinesListItem
            key={item.id}
            item={item}
            onUpdate={onUpdate}
            onDelete={onDelete}
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func
}

export default NicotinesList
