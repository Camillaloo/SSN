import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src='https://glimages.s3.amazonaws.com/templates/large/CircleUpText.jpg' alt=''/>
        {props.message}
        <div>
          <span>likes</span> {props.likesCount}
        </div>
        
      </div>      
    )
}

export default Post