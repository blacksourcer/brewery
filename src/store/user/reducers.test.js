import {
  SIGN_IN,
  SIGN_OUT
} from './actions'

import reducer from './reducers'

describe('user reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(null)
  })

  it('handles signIn action', () => {
    expect(reducer(null, {
      type: SIGN_IN,
      id: 's0mes1b0ls',
      email: 'user@domain.com'
    })).toEqual({ id: 's0mes1b0ls', email: 'user@domain.com' })
  })

  it('handles signOut action', () => {
    const state = reducer({ email: 'user@domain.com' }, {
      type: SIGN_OUT
    })

    expect(state).toEqual(null)
  })
})
