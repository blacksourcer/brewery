import * as actions from './actions'

describe('app actions', () => {
  it('creates valid Loading state', () => {
    expect(actions.loading())
      .toEqual({
        type: actions.LOADING
      })
  })

  it('creates valid Loaded state', () => {
    expect(actions.loaded())
      .toEqual({
        type: actions.LOADED
      })
  })

  it('creates valid Error state', () => {
    expect(actions.error({ message: 'a message' }))
      .toEqual({
        type: actions.ERROR,
        error: {
          message: 'a message'
        }
      })
  })
})
