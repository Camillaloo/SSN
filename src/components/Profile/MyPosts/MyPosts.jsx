import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {

  let postsElements =
    props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='share your thoughts' component={'textarea'} name={'newPostText'} className={s.textarea} />
      </div>
      <div>
        <button className={s.button}>add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts