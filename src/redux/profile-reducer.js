import {usersAPI, profileAPI} from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

let initialState = {
    posts: [
      { id: 1, post: "Finally it works!", likesCount: 14 },
      { id: 2, post: "Hola-Hola!", likesCount: 42 },
    ],
    profile: null,
    status: ''
  }

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.newPostText,
                likesCount: 0,
              }
              return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
              }
        case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.profile
          }
          case SET_STATUS:
            return {
              ...state,
              status: action.status
            }
        default:
            return state
    }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(responce => {
    dispatch(setUserProfile(responce.data))
  })
}

export const setStatus = (status) => ({type:SET_STATUS, status})

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then(responce => {
    dispatch(setStatus(responce.data))
  })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then (responce => {
    if (responce.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export default profileReducer