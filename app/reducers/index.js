import { combineReducers } from 'redux'

import UserAuthenticationReducer from './UserAuthenticationReducer'
import TimelineReducer from './TimelineReducer'

export default combineReducers({
  Timeline: TimelineReducer,
  UserAuthentication: UserAuthenticationReducer
})
