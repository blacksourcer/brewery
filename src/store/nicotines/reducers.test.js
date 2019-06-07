import * as actions from './actions'
import reducer from './reducers'

describe('nicotines reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('handles SET mutation', () => {
    expect(reducer([], actions.set([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]))).toEqual([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ])
  })

  it('handles ADD mutation', () => {
    expect(reducer([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 }
    ], actions.add(
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ))).toEqual([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ])
  })
})
