import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


function Dialogs() {
    const dialogs = [
        {id: 1, name: 'Dmitry'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Semen'},
    ]

    const messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What day is it today?'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'How are you?'},
    ]

    const dialogsElement = dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    const messagesElement = messages.map((m) => {
        return <Message message={m.message}/>
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