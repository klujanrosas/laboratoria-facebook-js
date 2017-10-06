import {
  REQUEST_DATA_FROM_TOKEN,
  REQUEST_DATA_FROM_TOKEN_SUCCESS,
  REQUEST_DATA_FROM_TOKEN_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
  isLoading: false,
  userInfo: null,
  userPosts: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DATA_FROM_TOKEN:
      return {
        ...state,
        userInfo: null,
        isLoading: true
      }
    case REQUEST_DATA_FROM_TOKEN_SUCCESS:
      console.log('requested user info', action.payload)
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
        userPosts: {
          ...state.userPosts,
          [action.payload.token]: []
        },
        errors: []
      }
    case REQUEST_DATA_FROM_TOKEN_FAILURE:
      return {
        ...state,
        userInfo: null,
        isLoading: false,
        errors: [action.payload]
      }
    default:
      return state
  }
}
