import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

type PostType = {
    id: number
    message: string
    likesCount: string
}


type MyPostsPropsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElement = props.posts.map((p) => {
        return <Post message={p.message}
                     likesCount={p.likesCount}/>
    })

    return <div className={s.content}>
        <div>My Posts</div>
        <textarea></textarea>
        <div>
            <button>Add post</button>
        </div>
        { postsElement }
    </div>

};

export default MyPosts;