import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements =
  props.posts.map (p => <Post message={p.post} likesCount={p.likesCount} />)
  
  let newPostElement = React.createRef()
  
  let onAddPost = () => {
    props.addPost()
  } 

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea className={s.textarea}
          placeholder='share your thoughts'
          onChange={onPostChange} ref={ newPostElement }
          value={props.newPostText} />
        </div>
        <div>
          <button className={s.button} onClick={ onAddPost }>add post</button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts