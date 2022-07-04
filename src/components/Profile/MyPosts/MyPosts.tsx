import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return <div className={style.content}>
        <div>My Posts</div>
        <textarea></textarea>
        <button>Add post</button>
        <Post title={"Post 1"} likesCount={'like 15'}/>
        <Post title={"Post 2"} likesCount={'like 8'}/>
        <Post title={"Post 3"} likesCount={'like 23'}/>
        <Post title={"Post 4"} likesCount={'like 19'}/>
        <Post title={"Post 5"} likesCount={'like 31'}/>
    </div>

};

export default MyPosts;