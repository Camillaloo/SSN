import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import userPhoto from '../../../assets/images/blank-avatar.png'
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
  if (!profile) {
    return <Preloader />
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt='' title={profile.fullName} />
        {isOwner && <input onChange={onMainPhotoSelected} type={'file'} /> }
        <div>{profile.fullName}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo