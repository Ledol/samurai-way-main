import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <main className={style.content}>
        <div>
            <img className={style.imgCity} src="http://www.eclatsvc.com.sg/wp-content/uploads/2017/05/city-2017-1000x200.jpg" alt=""/>
        </div>
        <div>
            <img className={style.imgLogo} src="https://cdn1.vectorstock.com/i/1000x1000/61/90/avatar-business-man-graphic-vector-9646190.jpg"
                 alt="avatar"/>
            <span>Dmitry L</span>

        </div>
        <MyPosts />
    </main>

};

export default Profile;