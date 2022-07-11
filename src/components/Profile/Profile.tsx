import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";


function Profile (props: ProfilePageType) {

    return <div>
        <ProfileInfo />
        <MyPosts posts={props.posts} />
    </div>

}

export default Profile;