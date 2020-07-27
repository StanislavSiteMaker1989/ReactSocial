import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, ...props}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
       <div >
           {/*<div className={s.content}>
               <img src='https://cdn.pixabay.com/photo/2017/02/08/17/24/butterfly-2049567_1280.jpg' />
           </div>*/}

           <div className={s.description}>
               <img src={profile.photos.small} />
               <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
           </div>
           <div>Description tools</div>

       </div>

    )
}

export default ProfileInfo;