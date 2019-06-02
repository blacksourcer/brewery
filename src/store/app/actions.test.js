import * as actions from './actions'

describe('app actions', () => {
  it('creates valid loading action', () => {
    expect(actions.loading())
      .toEqual({
        type: actions.LOADING
      })
  })

  it('creates valid loaded action', () => {
    expect(actions.loaded())
      .toEqual({
        type: actions.LOADED
      })
  })

  it('creates valid error action', () => {
    expect(actions.error({ message: 'a message' }))
      .toEqual({
        type: actions.ERROR,
        error: {
          message: 'a message'
        }
      })
  })
})
