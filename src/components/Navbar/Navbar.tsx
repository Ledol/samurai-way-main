import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
    return <nav className={style.nav}>
        <div className={style.item}>
            <a>Profile</a>
        </div>
        <div className={`${style.item} ${style.active}`}>
            <a>Message</a>
        </div>
        <div className={style.item}>
            <a>News</a>
        </div>
        <div className={style.item}>
            <a>Music</a>
        </div>
        <div className={style.item}>
            <a>Setting</a>
        </div>
    </nav>


};
