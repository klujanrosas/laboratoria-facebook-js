import {
  REQUEST_DATA_FROM_TOKEN,
  REQUEST_DATA_FROM_TOKEN_FAILURE,
  REQUEST_DATA_FROM_TOKEN_SUCCESS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from './types'
import API from '../api'

export const requestDataFromToken = () => {
  return {
    type: REQUEST_DATA_FROM_TOKEN
  }
}

export const requestDataFromTokenSuccess = (data) => {
  return {
    type: REQUEST_DATA_FROM_TOKEN_SUCCESS,
    payload: data.payload
  }
}

export const requestDataFromTokenFailure = (error) => {
  return {
    type: REQUEST_DATA_FROM_TOKEN_FAILURE,
    payload: error
  }
}

export const attemptRequestDataFromToken = () => {
  return async (dispatch) => {
    dispatch(requestDataFromToken())
    try {
      const retrievedUserToken = API.getUserSession()
      const response = await API.getUserDataFromToken(retrievedUserToken)
      dispatch(requestDataFromTokenSuccess(response.data))
    } catch (error) {
      dispatch(requestDataFromTokenFailure(error.message))
    }
  }
}

export const addPost = ({ type, content, image = null }) => {
  return {
    type: ADD_POST,
    payload: {
      type,
      content,
      image,
      id: `${type}${content}${new Date().getUTCMilliseconds() + Math.random()}` // don't do this, it's ugly and collisions can happen, then the DOM will go nuts
    }
  }
}

export const updatePost = ({ newContent, id }) => {
  return {
    type: UPDATE_POST,
    payload: {
      id,
      newContent
    }
  }
}

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId
  }
}

