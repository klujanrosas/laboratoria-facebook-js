import {
  REQUEST_DATA_FROM_TOKEN,
  REQUEST_DATA_FROM_TOKEN_SUCCESS,
  REQUEST_DATA_FROM_TOKEN_FAILURE,
  ADD_POST,
  UPDATE_POST
} from '../actions/types'

const INITIAL_STATE = {
  isLoading: false,
  userInfo: null,
  userPosts: {}
}

let posts
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_POST:
      posts = state.userPosts[state.userInfo.token].slice(0)
      posts = posts.map((post) => {
        return {
          ...post,
          content: post.id === action.payload.id ? action.payload.newContent : post.content
        }
      })
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          [state.userInfo.token]: posts
        }
      }
    case ADD_POST:
      posts = state.userPosts[state.userInfo.token].slice(0)
      posts.push(action.payload)
      return {
        ...state,
        userPosts: {
          ...state.userPosts,
          [state.userInfo.token]: posts
        }
      }
    case REQUEST_DATA_FROM_TOKEN:
      return {
        ...state,
        userInfo: null,
        isLoading: true
      }
    case REQUEST_DATA_FROM_TOKEN_SUCCESS:
      console.log('requested user info', action.payload)
      // eslint-disable-next-line no-prototype-builtins
      if (action.payload.hasOwnProperty('token')) {
        // eslint-disable-next-line no-prototype-builtins
        if (state.userPosts.hasOwnProperty(action.payload.token)) {
          posts = state.userPosts[action.payload.token]
        } else {
          posts = []
        }
      }
      return {
        ...state,
        userInfo: action.payload,
        isLoading: false,
        userPosts: posts !== undefined ?
          {
            ...state.userPosts,
            [action.payload.token]: posts
          } :
          {},
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
