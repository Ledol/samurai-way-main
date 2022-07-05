import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={s.content}>
        <div>My Posts</div>
        <textarea></textarea>
        <div>
            <button>Add post</button>
        </div>
        <Post message={"Message 1"} likesCount={'like 15'}/>
        <Post message={"Message 2"} likesCount={'like 8'}/>
        <Post message={"Message 3"} likesCount={'like 23'}/>
    </div>

};

export default MyPosts;