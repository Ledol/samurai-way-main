import React from 'react';
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog +' '+ s.active}>Dmitry</div>
                <div className={s.dialog}>Kate</div>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Semen</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>What day is it today?</div>
            </div>
        </div>
    );
};

export default Dialogs;