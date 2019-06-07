import { connect } from 'react-redux'

import { fetch, create } from '../../store/nicotines/actions'

import Nicotines from './nicotines.component'

const mapStateToProps = state => ({
  items: state.nicotines
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetch()),
  onFormSubmit: (item) => dispatch(create(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nicotines)
