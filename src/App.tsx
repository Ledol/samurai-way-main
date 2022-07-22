import {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import News from "./components/News/News";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Friends from "./components/Friends/Friends";
import {RootStateType} from "./redux/State";
import Setting from "./components/Setting/Setting";



type AppType = {
    state: RootStateType

}

export const App: FC<AppType> = (
    {state: {dialogsPage, profilePage, sidebar}}) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Friends friends={sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/Profile' render={() => {
                    return <Profile posts={profilePage.posts}/>
                }}/>
                <Route path='/Dialogs' render={() => {
                    return <Dialogs dialogs={dialogsPage.dialogs}
                                    messages={dialogsPage.messages}/>
                }}/>
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Setting' component={Setting}/>
            </div>
        </div>
    );
}


