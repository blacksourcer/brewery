import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import app from './app/reducers'
import user from './user/reducers'

const reducer = combineReducers({
  app,
  user
})

export default createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)
