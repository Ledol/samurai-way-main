import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/State";

type MyPostsType = {
    posts: PostType[]
    addPost: (postText: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    const postsElement = props.posts.map((p) => {
        return <Post key={p.id} id={p.id} message={p.message}
                     likesCount={p.likesCount}/>
    })

    const postMessageRef = React.createRef<HTMLTextAreaElement>();
    const addPostHandler = () => {
        if (postMessageRef.current) {
            props.addPost(postMessageRef.current.value)
        }
    }

    return <div className={s.content}>
        <div>My Posts</div>
        <textarea ref={postMessageRef}></textarea>
        <div>
            <button onClick={addPostHandler}>Add post</button>
        </div>
        {postsElement}
    </div>
}
