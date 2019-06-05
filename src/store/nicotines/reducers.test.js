import * as actions from './actions'
import reducer from './reducers'

describe('nicotines reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('handles SET_NICOTINES mutation', () => {
    expect(reducer([], actions.setNicotines([
      { id: 'a1', name: 'Generic nicotine', pg: 100 },
      { id: 'a2', name: 'Salt nicotine', pg: 50 }
    ]))).toEqual([
      { id: 'a1', name: 'Generic nicotine', pg: 100 },
      { id: 'a2', name: 'Salt nicotine', pg: 50 }
    ])
  })
})
