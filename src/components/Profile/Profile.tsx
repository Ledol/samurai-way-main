import React from 'react';
import style from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/State";

type ProfileType = {
    posts: PostType[]
    addPost: (postText: string) => void
}

export const Profile = (props: ProfileType) => <div>
    <ProfileInfo/>
    <MyPosts posts={props.posts} addPost={props.addPost}/>
</div>;
