import * as axios from 'axios'

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '51924322-039c-41bb-84d8-59eed7009dd2'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get
        (`users?page=${currentPage}&count=${pageSize}`)
        .then (responce => {
            return responce.data
        })
    },

    follow (userId) {
        return instance.post
        (`follow/${userId}`)
    },
    
    unfollow (userId) {
        return instance.delete
        (`follow/${userId}`)

    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me () {
        return instance.get ('auth/me')
    }
}