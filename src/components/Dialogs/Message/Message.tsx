import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../Redux/State";


export function Message(props: MessageType) {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



