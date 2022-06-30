import React from 'react';
import './App.css';


function App() {
    return (
        <div className='container'>
            <header className='header'>
                <img src="https://media.istockphoto.com/vectors/soccer-ball-symbol-football-ball-icon-vector-id1263601084?k=20&m=1263601084&s=612x612&w=0&h=7Hw0H4ueSCn2hRvjK40dt_cZNk8nVEVXlZhiztVb-cc=" alt="ball"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Message</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Setting</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://i.pinimg.com/originals/28/23/cc/2823ccecf4f0f0ae3a063069cb160398.png" alt="avatar"/>
                    <span>Dmitry L</span>
                </div>
                <div>
                    My post
                </div>
                <div>
                    Input and Button
                </div>
                <div>
                    Hey, why nobody
                </div>
                <div>
                    It's our new
                </div>
            </div>
        </div>

    );
}

export default App;
