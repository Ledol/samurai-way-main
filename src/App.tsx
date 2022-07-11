import React from 'react';
import './App.css';
import s from './Dialogs.module.css'
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import {RootStateType} from "./Redux/State";


type AppType = {
    state: RootStateType
}

function App({state}: AppType ) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/Profile' render={() => {
                        return <Profile posts={state.profilePage.posts}/>
                    }}/>
                    <Route path='/Dialogs' render={() => {
                        return <Dialogs dialogs={state.dialogsPage.dialogs}
                                        messages={state.dialogsPage.messages}/>
                    }}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Setting' component={Setting}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
