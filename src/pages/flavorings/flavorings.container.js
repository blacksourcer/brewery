import { connect } from 'react-redux'

import { fetch, create, update, deleteById } from '../../store/flavorings/actions'

import Flavorings from './flavorings.component'

const mapStateToProps = state => ({
  loading: state.app.loading,
  items: state.flavorings
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetch()),
  onCreate: (item) => dispatch(create(item)),
  onUpdate: (item) => dispatch(update(item)),
  onDelete: (id) => dispatch(deleteById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Flavorings)
