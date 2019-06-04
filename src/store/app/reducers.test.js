import * as actions from './actions'
import reducer from './reducers'

describe('app reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      initializing: false,
      loading: false,
      error: null,
      user: null
    })
  })

  it('handles SET_INITIALIZING mutation', () => {
    expect(reducer({
      initializing: false,
      loading: false,
      error: null,
      user: null
    }, actions.setInitializing())).toEqual({
      initializing: true,
      loading: false,
      error: null,
      user: null
    })
  })

  it('handles SET_LOADING mutation', () => {
    expect(reducer({
      initializing: false,
      loading: false,
      error: null,
      user: null
    }, actions.setLoading())).toEqual({
      initializing: false,
      loading: true,
      error: null,
      user: null
    })
  })

  it('handles SET_ERROR mutation', () => {
    expect(reducer({
      initializing: false,
      loading: false,
      error: null,
      user: null
    }, actions.setError({ message: 'a message' }))).toEqual({
      initializing: false,
      loading: false,
      error: { message: 'a message' },
      user: null
    })
  })

  it('handles SET_USER mutation', () => {
    expect(reducer({
      initializing: false,
      loading: false,
      error: null,
      user: null
    }, actions.setUser({ id: 'a1', email: 'user@domain.com' }))).toEqual({
      initializing: false,
      loading: false,
      error: null,
      user: { id: 'a1', email: 'user@domain.com' }
    })
  })
})
