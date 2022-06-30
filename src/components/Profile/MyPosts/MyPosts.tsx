import React from 'react';
import style from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        <div>
            My post
        </div>
        <div className={style.item}>
            <button>Отправить</button>
        </div>
        <div className={style.item}>
            <input type={"text"}/> Hey, why nobody
        </div>
        <div>
            <input type={"text"} placeholder={"It's our new"}/>
        </div>
    </div>

};

export default MyPosts;