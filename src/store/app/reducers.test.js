import * as actions from './actions'
import reducer from './reducers'

describe('app reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      error: null
    })
  })

  it('handles loading action', () => {
    expect(reducer({
      loading: false,
      error: null
    }, actions.loading())).toEqual({
      loading: true,
      error: null
    })
  })

  it('handles loaded action', () => {
    expect(reducer({
      loading: true,
      error: null
    }, actions.loaded())).toEqual({
      loading: false,
      error: null
    })
  })

  it('handles error action', () => {
    expect(reducer({
      loading: false,
      error: null
    }, actions.error({ message: 'a message' }))).toEqual({
      loading: false,
      error: { message: 'a message' }
    })
  })
})
