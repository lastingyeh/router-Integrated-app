import { HANDLE_SUBMIT } from '../constants/actionType'
import { Map } from 'immutable'

const initialState = Map({ userId: '', password: '', company: '' })

export default (state = initialState, action) => {

  switch (action.type) {
    case HANDLE_SUBMIT:
      return state.merge(action.payload)
    default:
      return state
  }
}
