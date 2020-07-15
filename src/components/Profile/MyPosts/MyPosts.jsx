import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {required, maxLengthCreator} from '../../../utils/validators/validators'
import {Textarea} from '../../common/FormsControls/FormsControls'

const MyPosts = React.memo((props) => {
  let postsElements =
    props.posts.map(p => <Post key={p.id} message={p.post} likesCount={p.likesCount} />)

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
})

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='share your thoughts' 
        component={Textarea} name={'newPostText'} 
        // className={s.textarea}
        validate={[required, maxLength10]} />
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