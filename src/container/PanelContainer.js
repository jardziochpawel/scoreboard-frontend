import React, {useEffect} from 'react';
import {Panel} from "../component";
import {SCOREBOARD, TEAMS, TEAMS_PL, ENDPOINT} from "../static/data";
import useLocalStorage from "../hooks/useLocalStorage";
import {AuthHeader} from '../services/auth-header';
import AuthService from '../services/auth.service';
import {useHistory} from "react-router-dom";
import {useQuery} from "../hooks/useQuery";
import getSecondsFromMMSS from "../helpers/getSecondsFromMMSS";

const PanelContainer = ({socket, scoreboardFetch}) => {
    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard', scoreboardFetch);
    const [startTime, setStartTime] = useLocalStorage('start-time', scoreboardFetch.time);
    const user = AuthService.getCurrentUser();
    let history = useHistory();
    let query = useQuery();
    const teams = query.get('teams') === 'pl' ? TEAMS_PL : TEAMS;
    socket.emit('timer-data', scoreboard);

    useEffect(() => {
        socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, scoreboard]);

    const submitData = ( data) => {
        AuthHeader(ENDPOINT+'/scoreboard/60a17e5c75ef8d9af22dd94c', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers([
                ['Content-Type', 'application/json']
            ])
        }).then(res => res.json()).then(data=>setScoreboard(data)).catch(err=>console.log(err));
    }

    const onChange = (value) => {
        submitData({...scoreboard, time: value});
    }

    const onChangeTeamA = (value) => {
        submitData({...scoreboard, teamA: value});
    }

    const onChangeTeamB = (value) => {
        submitData({...scoreboard, teamB: value});
    }

    const addFighterTeamA = () =>{
        const { fightersTeamA } = scoreboard;
        if(fightersTeamA >= 5){
            return submitData({...scoreboard, fightersTeamA: 5});
        }
        submitData({...scoreboard, fightersTeamA: fightersTeamA+1});
    }

    const reduceFighterTeamA = () =>{
        const {fightersTeamA} = scoreboard;
        if(fightersTeamA <= 0){
            return submitData({...scoreboard, fightersTeamA: 0});
        }
        submitData({...scoreboard, fightersTeamA: fightersTeamA-1});
    }

    const addFighterTeamB = () =>{
        const { fightersTeamB } = scoreboard;
        if(fightersTeamB >= 5){
            return submitData({...scoreboard, fightersTeamB: 5});
        }
        submitData({...scoreboard, fightersTeamB: fightersTeamB+1});
    }

    const reduceFighterTeamB = () =>{
        const { fightersTeamB } = scoreboard;
        if(fightersTeamB <= 0){
            return submitData({...scoreboard, fightersTeamB: 0});
        }
        submitData({...scoreboard, fightersTeamB: fightersTeamB-1});
    }

    const addScoreTeamA = () =>{
        const { pointsTeamA } = scoreboard;
        if(pointsTeamA >= 2){
            return submitData({...scoreboard, pointsTeamA: 2});
        }
        submitData({...scoreboard, pointsTeamA: pointsTeamA+1});
    }

    const reduceScoreTeamA = () =>{
        const { pointsTeamA } = scoreboard;
        if(pointsTeamA <= 0){
            return submitData({...scoreboard, pointsTeamA: 0});
        }
        submitData({...scoreboard, pointsTeamA: pointsTeamA-1});
    }

    const addScoreTeamB = () =>{
        const { pointsTeamB } = scoreboard;
        if(pointsTeamB >= 2){
            return submitData({...scoreboard, pointsTeamB: 2});
        }
        submitData({...scoreboard, pointsTeamB: pointsTeamB+1});
    }

    const reduceScoreTeamB = () =>{
        const { pointsTeamB } = scoreboard;
        if(pointsTeamB <= 0){
            return submitData({...scoreboard, pointsTeamB: 0});
        }
        submitData({...scoreboard, pointsTeamB: pointsTeamB - 1});
    }

    const resetPanel = () =>{
        submitData(SCOREBOARD);
    }

    const onStart = () => {
        setStartTime(scoreboard.time);
        submitData({...scoreboard, start: true, pause: false, reset: false });
    }

    const onPause = () => {
        submitData({...scoreboard, pause: true, start: true, reset: false});
    }

    const onResume = () => {
        submitData({...scoreboard, pause: false, start: true, reset: false});
    }

    const timeReset = () => {
        submitData({...scoreboard, start: false, reset: true, pause: false, time: startTime});
    }

    const onRefresh = () => {
        const timeLocalstorage =  getSecondsFromMMSS(JSON.parse(window.localStorage.getItem('scoreboard-app-countdown')));
        const time = timeLocalstorage !== undefined ? timeLocalstorage : SCOREBOARD.time;
        console.log(time);
        submitData({...scoreboard, time: time});
    }

    return(
        <Panel>
            <Panel.Header>
                <Panel.Hello>{user.fullName}</Panel.Hello>
                <Panel.LogoutButton onClick={()=>AuthService.logout(history)}>Logout</Panel.LogoutButton>
            </Panel.Header>
            <Panel.FormContainer>
                <Panel.TeamInput
                    label='Team A'
                    value={scoreboard.teamA}
                    onChange={onChangeTeamA}
                    options={teams}
                />
                <Panel.Countdown
                    socket={socket}
                    scoreboard={scoreboard}
                    timerPause={scoreboard.pause}
                    timerOn={scoreboard.start}
                    timerReset={scoreboard.reset}
                    timerChange={onChange}
                    timerTime={scoreboard.time}
                />
                <Panel.TeamInput
                    label='Team B'
                    value={scoreboard.teamB}
                    onChange={onChangeTeamB}
                    options={teams}
                />
                <Panel.Break/>

                <Panel.ScoreTeam>{scoreboard.fightersTeamA}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.pointsTeamA}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.pointsTeamB}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.fightersTeamB}</Panel.ScoreTeam>
                <Panel.Break/>
                <Panel.BorderedContainer>
                <Panel.ButtonScoreTeamA onClick={reduceFighterTeamA}>- 1</Panel.ButtonScoreTeamA>
                <Panel.Text>
                 Fighters A
                </Panel.Text>
                <Panel.ButtonScoreTeamA onClick={addFighterTeamA}>+ 1</Panel.ButtonScoreTeamA>
                </Panel.BorderedContainer>
                <Panel.BorderedContainer>
                <Panel.ButtonScoreTeamA onClick={reduceScoreTeamA}>- 1</Panel.ButtonScoreTeamA>
                <Panel.Text>
                Rounds A 
                </Panel.Text>
                <Panel.ButtonScoreTeamA onClick={addScoreTeamA}>+ 1</Panel.ButtonScoreTeamA>  
                </Panel.BorderedContainer>
                <Panel.BorderedContainer>
                <Panel.ButtonScoreTeamB onClick={reduceScoreTeamB}>- 1</Panel.ButtonScoreTeamB>
                <Panel.Text>
                Rounds B
                </Panel.Text>
                <Panel.ButtonScoreTeamB onClick={addScoreTeamB}>+ 1</Panel.ButtonScoreTeamB>
                </Panel.BorderedContainer>
                <Panel.BorderedContainer>
                <Panel.ButtonScoreTeamB onClick={reduceFighterTeamB}>- 1</Panel.ButtonScoreTeamB>
                <Panel.Text>
                Fighters B
                </Panel.Text>
                <Panel.ButtonScoreTeamB onClick={addFighterTeamB}>+ 1</Panel.ButtonScoreTeamB>                    
                </Panel.BorderedContainer>
                <Panel.Break/>
                { (!scoreboard.start && !scoreboard.pause)  && <Panel.ButtonStart onClick={onStart}> Start </Panel.ButtonStart>}
                { ( scoreboard.pause || scoreboard.start) && <Panel.ButtonStart onClick={onResume}> Resume </Panel.ButtonStart>}
                <Panel.ButtonStart onClick={onPause} disabled={scoreboard.pause}> Pause </Panel.ButtonStart>
                <Panel.Break/>
                <Panel.ButtonReset onClick={timeReset}> Timer Reset </Panel.ButtonReset>
                <Panel.ButtonReset onClick={resetPanel}> Panel Reset </Panel.ButtonReset>
                <Panel.ButtonReset onClick={onRefresh}> Refresh </Panel.ButtonReset>
            </Panel.FormContainer>
        </Panel>
    )
}

export default PanelContainer;