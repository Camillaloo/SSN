import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div className={s.contentBlock}> 
    <div className={s.clearfix}>
      <ProfileInfo savePhoto={props.savePhoto}
       isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      saveProfile={props.saveProfile}
      updateStatus={props.updateStatus} />
    </div>
      <MyPostsContainer />
    </div>
  )
}
export default Profile