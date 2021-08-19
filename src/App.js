import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import socketIOClient from "socket.io-client";

import ScoreBoardContainer from "./container/ScoreBoardContainer";
import PanelContainer from "./container/PanelContainer";
import LoginContainer from "./container/LoginContainer";

import {ENDPOINT} from "./static/data";
import PrivateRoute from "./helpers/PrivateRoute";

const socket = socketIOClient(ENDPOINT,  {transports: ['websocket']});


function App() {

    const [scoreboard, setScoreboard] = useState();

    useEffect(()=>{
        fetch(ENDPOINT+'/scoreboard/60a17e5c75ef8d9af22dd94c').then(res => res.json()).then(data => setScoreboard(data));
    },[])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' >
                        { scoreboard ? <ScoreBoardContainer socket={socket} scoreboardFetch={scoreboard}/> : <div>Loading...</div>}
                    </Route>
                    <Route exact path='/login'>
                        <LoginContainer socket={socket}/>
                    </Route>
                    <PrivateRoute exact path='/panel'>
                        { scoreboard ? <PanelContainer socket={socket} scoreboardFetch={scoreboard}/> : <div>Loading...</div> }
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
