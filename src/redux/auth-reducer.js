const SET_USER_DATA = 'SET-USER-DATA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
  }

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        return {
            ...state,
            ...action.data,
            isAuth: true
        }
        default:
            return state
    }
}

//action creators: use full parameters to identify what is inside data
export const setAuthUserData = (id, email,login) => ({ type: SET_USER_DATA, data: {id, email, login}})


export default authReducer