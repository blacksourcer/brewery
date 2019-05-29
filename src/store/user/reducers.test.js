import {
  SIGN_IN,
  SIGN_OUT
} from './actions'

import reducer from './reducers'

describe('user reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  it('should handle signing in', () => {
    expect(reducer(null, {
      type: SIGN_IN,
      email: 'user@domain.com',
      password: 'qweqwe123'
    })).toEqual({ email: 'user@domain.com' })
  })

  it('should handle signing out', () => {
    const state = reducer({ email: 'user@domain.com' }, {
      type: SIGN_OUT
    })

    expect(state).toEqual(null)
  })
})
