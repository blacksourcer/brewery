import * as actions from './actions'

describe('user actions', () => {
  it('creates valid signIn action', () => {
    expect(actions.signIn('user@domain.com', 'qweqwe123'))
      .toEqual({
        type: actions.SIGN_IN,
        email: 'user@domain.com',
        password: 'qweqwe123'
      })
  })
})
