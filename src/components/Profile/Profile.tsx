import React from 'react';
import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";


export const Profile = (props: ProfilePageType) => <div>
    <ProfileInfo/>
    <MyPosts posts={props.posts}/>
</div>;
