import { connect } from 'react-redux'

import { fetch } from '../../store/nicotines/actions'

import Nicotines from './nicotines.component'

const mapStateToProps = state => ({
  items: state.nicotines
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(fetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Nicotines)
