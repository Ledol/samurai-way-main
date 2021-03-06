import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/State";


export function DialogItem(props: DialogType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.imgUser}
                src={props.image} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


