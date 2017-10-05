import { combineReducers } from 'redux'

import UserAuthenticationReducer from './UserAuthenticationReducer'

export default combineReducers({
  UserAuthentication: UserAuthenticationReducer
})
