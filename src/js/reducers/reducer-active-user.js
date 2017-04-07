import * as Action from '../constants/actionType'
import { Map } from 'immutable'

const initialState = Map({ activeUser: null })

const activeUser = (state = initialState, action) => {

  switch (action.type) {
    case Action.USER_SELECTED:

      return state.setIn(['activeUser'], action.payload)
    default:
      return state
  }
}

export default activeUser

