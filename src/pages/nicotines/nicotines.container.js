import { connect } from 'react-redux'

import { fetch, create, update, deleteById } from '../../store/nicotines/actions'

import Nicotines from './nicotines.component'

const mapStateToProps = state => ({
  items: state.nicotines
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetch()),
  onCreate: (item) => dispatch(create(item)),
  onUpdate: (item) => dispatch(update(item)),
  onDelete: (id) => dispatch(deleteById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nicotines)
