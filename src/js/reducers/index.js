import { combineReducers } from 'redux'

// reducer change state
import activeUser from './reducer-active-user'
import userLoginInfo from './reducer-user-loginInfo'

// default-data state
import stockData from '../constants/stockData'
import userData from '../constants/userData'

// combineReducers....
const allReducers = combineReducers({
  activeUser,
  userLoginInfo,
  userData,
  stockData,
})

export default allReducers
