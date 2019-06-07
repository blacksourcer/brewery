import { SET, ADD } from './actions'

const initialState = []

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return action.value

    case ADD:
      return [ ...state, action.value ]

    default:
      return state
  }
}

export default app
