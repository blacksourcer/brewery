import { flavorings } from '../../services/firebase'

import { setLoading, setError } from '../app/actions'

export const SET = 'FLAVORINGS_SET'
export const ADD = 'FLAVORINGS_ADD'
export const EDIT = 'FLAVORINGS_EDIT'
export const REMOVE = 'FLAVORINGS_REMOVE'

export const set = (value = []) => ({
  type: SET,
  value
})

export const add = (value) => ({
  type: ADD,
  value
})

export const edit = (value) => ({
  type: EDIT,
  value
})

export const remove = (value) => ({
  type: REMOVE,
  value
})

export const fetch = () => dispatch => {
  dispatch(setLoading())

  return flavorings.get()
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

  return flavorings.add(item)
    .then(doc => dispatch(add({ id: doc.id, ...item })))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}

export const update = (item) => dispatch => {
  dispatch(setLoading())

  const { id, ...doc } = item

  return flavorings.doc(item.id).update(doc)
    .then(() => dispatch(edit(item)))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}

export const deleteById = (id) => dispatch => {
  dispatch(setLoading())

  return flavorings.doc(id).delete()
    .then(() => dispatch(remove(id)))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}
