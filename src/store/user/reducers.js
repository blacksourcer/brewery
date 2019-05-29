import {
  SIGN_IN,
  SIGN_OUT
} from './actions'

const initialState = null

const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        email: action.email
      }
    case SIGN_OUT:
      return null

    default:
      return state
  }
}

export default user
