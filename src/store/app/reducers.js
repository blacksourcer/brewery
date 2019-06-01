import {
  LOADING,
  LOADED,
  ERROR
} from './actions'

const initialState = {
  loading: false,
  error: null
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state, loading: true
      }

    case LOADED:
      return {
        ...state, loading: false
      }

    case ERROR:
      return {
        ...state, error: action.error
      }

    default:
      return state
  }
}

export default app
