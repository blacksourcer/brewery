import {
  SET_INITIALIZING,
  SET_LOADING,
  SET_ERROR,
  SET_USER
} from './actions'

const initialState = {
  initializing: false,
  loading: false,
  error: null,
  user: null
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZING:
      return {
        ...state, initializing: action.value
      }

    case SET_LOADING:
      return {
        ...state, loading: action.value
      }

    case SET_ERROR:
      return {
        ...state, error: action.value
      }

    case SET_USER:
      return {
        ...state, user: action.value
      }

    default:
      return state
  }
}

export default app
