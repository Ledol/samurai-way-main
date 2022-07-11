import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";


const MyPosts = (props: ProfilePageType) => {

    const postsElement = props.posts.map((p) => {
        return <Post id={p.id}  message={p.message}
                     likesCount={p.likesCount}/>
    })

    return <div className={s.content}>
        <div>My Posts</div>
        <textarea></textarea>
        <div>
            <button>Add post</button>
        </div>
        {postsElement}
    </div>
}

export default MyPosts;