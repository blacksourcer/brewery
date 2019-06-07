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
    const initialState = [
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 }
    ]

    expect(reducer(initialState, actions.add(
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ))).toEqual([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ])
  })

  it('handles REMOVE mutation', () => {
    const initialState = [
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]

    expect(reducer(initialState, actions.remove('a1'))).toEqual([
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ])
  })
})
