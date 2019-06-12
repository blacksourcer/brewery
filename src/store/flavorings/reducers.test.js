import * as actions from './actions'
import reducer from './reducers'

describe('flavorings reducers', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('handles SET mutation', () => {
    expect(reducer([], actions.set([
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]))).toEqual([
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ])
  })

  it('handles ADD mutation', () => {
    const initialState = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ]

    expect(reducer(initialState, actions.add(
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ))).toEqual([
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ])
  })

  it('handles EDIT mutation', () => {
    const initialState = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    expect(reducer(initialState, actions.edit(
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard V2', pg: 100, notes: 'Safer then V1' }
    ))).toEqual([
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard V2', pg: 100, notes: 'Safer then V1' }
    ])
  })

  it('handles REMOVE mutation', () => {
    const initialState = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    expect(reducer(initialState, actions.remove('a1'))).toEqual([
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ])
  })
})
