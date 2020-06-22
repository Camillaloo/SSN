import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import userPhoto from '../../../assets/images/blank-avatar.png'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src='https://cdn.pixabay.com/photo/2018/11/28/14/16/illustration-3843801_960_720.jpg' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large !=null ? props.profile.photos.large : userPhoto}/>
        <span>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <div>{props.profile.lookingForAJob}</div>
          <div>{props.profile.lookingForAJobDescription}</div>
        </span>
      </div>
    </div>
  )
}

export default ProfileInfo