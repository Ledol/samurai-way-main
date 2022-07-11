import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../Redux/State";


function Dialogs(props: DialogsPageType) {

    const dialogsElement = props.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    const messagesElement = props.messages.map((m) => {
        return <Message id={m.id} message={m.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs;