import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/State";


export function Message(props: MessageType) {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



