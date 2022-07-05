import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.imgCity}
                     src="http://www.eclatsvc.com.sg/wp-content/uploads/2017/05/city-2017-1000x200.jpg" alt=""/>
            </div>
            <div className={s.discriptionBlock}>
                <img className={s.imgLogo}
                     src="https://cdn1.vectorstock.com/i/1000x1000/61/90/avatar-business-man-graphic-vector-9646190.jpg"
                     alt="avatar"/>
                <span>Dmitry L</span>
            </div>
        </div>
    )
};

export default ProfileInfo;