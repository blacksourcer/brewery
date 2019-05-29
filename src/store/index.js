import { combineReducers, createStore } from 'redux'

import user from './user/reducers'

const reducer = combineReducers({
  user
})

export default createStore(reducer)
