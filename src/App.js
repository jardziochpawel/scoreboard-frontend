import ScoreBoardContainer from "./container/ScoreBoardContainer";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PanelContainer from "./container/PanelContainer";
import socketIOClient from "socket.io-client";

import {ENDPOINT} from "./static/data";
const socket = socketIOClient(ENDPOINT,  {transports: ['websocket']});

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path='/' >
                <ScoreBoardContainer socket={socket}/>
            </Route>
            <Route exact path='/panel'>
                <PanelContainer socket={socket}/>
            </Route>
        </Router>
    </div>
  );
}

export default App;
