import { nicotines } from '../../services/firebase'

import { setLoading, setError } from '../app/actions'

export const SET = 'NICOTINES_SET'
export const ADD = 'NICOTINES_ADD'

export const set = (value = []) => ({
  type: SET,
  value
})

export const add = (value) => ({
  type: ADD,
  value
})

export const fetch = () => dispatch => {
  dispatch(setLoading())

  return nicotines.get()
    .then((query) => dispatch(set(
      query.docs.map(
        doc => ({ id: doc.id, ...doc.data() })
      )
    )))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}

export const create = (item) => dispatch => {
  dispatch(setLoading())

  return nicotines.add(item)
    .then(doc => dispatch(add({ id: doc.id, ...item })))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}
