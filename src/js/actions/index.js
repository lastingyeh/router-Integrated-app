import * as Action from '../constants/actionType'

export const selectUser = (user) => ({
  type: Action.USER_SELECTED,
  payload: user,
})

export const handleSubmit = (userInfo) => ({
  type: Action.HANDLE_SUBMIT,
  payload: userInfo,
})

