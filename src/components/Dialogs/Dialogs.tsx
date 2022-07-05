import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

function DialogItem(props: DialogItemType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dmitry'} id={1}/>
                <DialogItem name={'Kate'} id={2}/>
                <DialogItem name={'Alex'} id={3}/>
                <DialogItem name={'Sveta'} id={4}/>
                <DialogItem name={'Semen'} id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'What day is it today?'}/>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>

            </div>
        </div>
    );
};

export default Dialogs;