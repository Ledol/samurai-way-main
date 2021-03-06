import React from 'react';
import {NavLink} from "react-router-dom";
import {FriendsType} from "../../../redux/State";
import style from './FriendItem.module.css';
import s from "../../Dialogs/Dialogs.module.css";



export const FriendItem = (props: FriendsType) => {
    let path = '/friends/' + props.id;
    return (
        <span className={style.item}>
            <div><img className={s.imgUser} src={props.image} alt=""/></div>
            <NavLink to={path}>{props.name}</NavLink>
        </span>
    );
};
