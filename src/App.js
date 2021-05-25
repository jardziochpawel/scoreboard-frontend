import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import socketIOClient from "socket.io-client";

import ScoreBoardContainer from "./container/ScoreBoardContainer";
import PanelContainer from "./container/PanelContainer";
import LoginContainer from "./container/LoginContainer";

import {ENDPOINT} from "./static/data";
import PrivateRoute from "./helpers/PrivateRoute";

const socket = socketIOClient(ENDPOINT,  {transports: ['websocket']});

function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/' >
                        <ScoreBoardContainer socket={socket}/>
                    </Route>
                    <Route exact path='/login'>
                        <LoginContainer socket={socket}/>
                    </Route>
                    <PrivateRoute exact path='/panel'>
                        <PanelContainer socket={socket}/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
