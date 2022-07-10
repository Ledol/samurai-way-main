import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile () {
    const posts = [
        {id: 1, message: 'Message 1', likesCount: 'like 15'},
        {id: 2, message: 'Message 2', likesCount: 'like 8'},
        {id: 3, message: 'Message 3', likesCount: 'like 23'},
    ]

    return <div>
        <ProfileInfo />
        <MyPosts posts={posts} />
    </div>

};

export default Profile;