import React from 'react'
import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'


it ('length of posts should be incremented', () => {
  //start test data
  let action = addPostActionCreator('Hola holala')
  let state = {
    posts: [
      { id: 1, post: "Finally it works!", likesCount: 14 },
      { id: 2, post: "Hola-Hola!", likesCount: 42 },
    ]
  }
  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts.length).toBe(3)
})

it ('after deleting length of posts should decrement', () => {
  //start test data
  let action = deletePost('Hola holala')
  let state = {
    posts: [
      { id: 1, post: "Finally it works!", likesCount: 14 },
      { id: 2, post: "Hola-Hola!", likesCount: 42 },
    ]
  }
  //action
  let newState = profileReducer(state, action)

  //expectation
  expect(newState.posts.length).toBe(2)
})