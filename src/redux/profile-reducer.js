const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    posts: [
      { id: 1, post: "Finally it works!", likesCount: 14 },
      { id: 2, post: "Hola-Hola!", likesCount: 42 },
    ],
    newPostText: "",
    profile: null
  }

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
              }
              return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
              }
        case UPDATE_NEW_POST_TEXT:
            return {
              ...state,
              newPostText: action.newText
            }
        case SET_USER_PROFILE:
          return {
            ...state,
            profile: action.profile
          }
        default:
            return state
    }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer