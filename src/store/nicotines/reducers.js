import { SET_NICOTINES } from './actions'

const initialState = []

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_NICOTINES:
      return action.value

    default:
      return state
  }
}

export default app
