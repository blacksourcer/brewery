import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import app from './app/reducers'
import nicotines from './nicotines/reducers'
import flavorings from './flavorings/reducers'

import { initialize } from './app/actions'

const reducer = combineReducers({
  app,
  nicotines,
  flavorings
})

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(initialize())

export default store
