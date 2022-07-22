import React from 'react';
import s from './Friends.module.css'
import {FriendsPageType} from "../../redux/State";
import {FriendItem} from "./FriendItem/FriendItem";



const Friends = (props: FriendsPageType) => {

    const friendsElement = props.friends.map((f) => {
        return <FriendItem id={f.id} name={f.name} image={f.image}/>
    })

    return (
        <div className={s.friend}>
            {friendsElement}
        </div>
    );
}

export default Friends;