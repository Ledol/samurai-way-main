import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/State";

type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addMessage: (messageText: string) => void
}


function Dialogs(props: DialogsType) {

    const dialogsElement = props.dialogs.map((d) => {
        return <DialogItem name={d.name} id={d.id} image={d.image}/>
    })

    const messagesElement = props.messages.map((m) => {
        return <Message id={m.id} message={m.message}/>
    })

    const newMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessageHandler = () => {
        if (newMessageRef.current) {
            props.addMessage(newMessageRef.current?.value)
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>New Message</div>
            <div><textarea ref={newMessageRef}></textarea>
                <button onClick={addMessageHandler}>Add message</button>

            </div>
        </div>
    );
}

export default Dialogs;