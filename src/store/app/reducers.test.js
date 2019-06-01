import * as actions from './actions'
import reducer from './reducers'

describe('app reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: null
    })
  })

  it('should handle Loading action', () => {
    expect(reducer({
      loading: false,
      error: null
    }, actions.loading())).toEqual({
      loading: true,
      error: null
    })
  })

  it('should handle Loaded action', () => {
    expect(reducer({
      loading: true,
      error: null
    }, actions.loaded())).toEqual({
      loading: false,
      error: null
    })
  })

  it('should handle Error action', () => {
    expect(reducer({
      loading: false,
      error: null
    }, actions.error({ message: 'a message' }))).toEqual({
      loading: false,
      error: { message: 'a message' }
    })
  })
})
