import { SET, ADD, EDIT, REMOVE } from './actions'

const initialState = []

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return action.value

    case ADD:
      return [ ...state, action.value ]

    case EDIT:
      return state.map(
        item => item.id === action.value.id ? action.value : item
      )

    case REMOVE:
      return state.filter(item => item.id !== action.value)

    default:
      return state
  }
}

export default app
