import { connect } from 'react-redux'

import { fetch, create, deleteById } from '../../store/nicotines/actions'

import Nicotines from './nicotines.component'

const mapStateToProps = state => ({
  items: state.nicotines
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetch()),
  onCreate: (item) => dispatch(create(item)),
  onDelete: (id) => dispatch(deleteById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nicotines)
