import React, {useEffect} from 'react';
import {Panel} from "../component";
import getSecondsFromMMSS from "../helpers/getSecondsFromMMSS";
import {SCOREBOARD, TEAMS, ENDPOINT} from "../static/data";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";

const PanelContainer = (socket) => {
    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard',SCOREBOARD);
    const [disabled, setDisable] = useLocalStorage('disabled', false);

    useEffect(()=>{
        fetch(ENDPOINT+'/scoreboard/60a17e5c75ef8d9af22dd94c', {
                method: 'GET',
                headers: new Headers([
                    ['Content-Type', 'application/json']
                ])
            }).then(res => res.json()).then(data=>setScoreboard(data)).catch(err=>console.log(err));
    }, [setScoreboard]);

    const submitData = ( data) => {
        fetch(ENDPOINT+'/scoreboard/60a17e5c75ef8d9af22dd94c', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers([
                ['Content-Type', 'application/json']
            ])
        }).then(res => res.json()).then(data=>setScoreboard(data)).catch(err=>console.log(err));
    }

    const onChange = (value) => {
        const seconds = getSecondsFromMMSS(value);
        submitData({...scoreboard, time: seconds});
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
        setDisable(false);
    }

    const onStart = () => {
        submitData({...scoreboard, start: true});
        setDisable(true);
    }

    const onPause = () => {
        submitData({...scoreboard, start: false});
        setDisable(true);
    }

    const timeReset = () => {
        submitData({...scoreboard, start: false, reset: true});
        setDisable(false);
        submitData({...scoreboard, start: false, reset: false});
    }

    return(
        <Panel>
            <Panel.FormContainer>
                <Panel.TeamInput
                    label='Team A'
                    value={scoreboard.teamA}
                    onChange={onChangeTeamA}
                    options={TEAMS}
                />
                <Panel.TimerInput
                    disabled={disabled}
                    setValue={onChange}
                    value={scoreboard.time}
                    start={scoreboard.start}
                    cd={useCountdown(scoreboard.time, scoreboard.start, scoreboard.reset)}
                />
                <Panel.TeamInput
                    label='Team B'
                    value={scoreboard.teamB}
                    onChange={onChangeTeamB}
                    options={TEAMS}
                />
                <Panel.Break/>
                <Panel.ScoreTeam>{scoreboard.fightersTeamA}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.pointsTeamA}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.pointsTeamB}</Panel.ScoreTeam>
                <Panel.ScoreTeam>{scoreboard.fightersTeamB}</Panel.ScoreTeam>
                <Panel.Break/>
                <Panel.ButtonScoreTeamA onClick={reduceFighterTeamA}>- 1</Panel.ButtonScoreTeamA>
                <Panel.ButtonScoreTeamA onClick={addFighterTeamA}>+ 1</Panel.ButtonScoreTeamA>
                <Panel.ButtonScoreTeamA onClick={reduceScoreTeamA}>- 1</Panel.ButtonScoreTeamA>
                <Panel.ButtonScoreTeamA onClick={addScoreTeamA}>+ 1</Panel.ButtonScoreTeamA>
                <Panel.ButtonScoreTeamB onClick={reduceScoreTeamB}>- 1</Panel.ButtonScoreTeamB>
                <Panel.ButtonScoreTeamB onClick={addScoreTeamB}>+ 1</Panel.ButtonScoreTeamB>
                <Panel.ButtonScoreTeamB onClick={reduceFighterTeamB}>- 1</Panel.ButtonScoreTeamB>
                <Panel.ButtonScoreTeamB onClick={addFighterTeamB}>+ 1</Panel.ButtonScoreTeamB>
                <Panel.Break/>
                <Panel.ButtonStart onClick={onStart}> Start </Panel.ButtonStart>
                <Panel.ButtonStart onClick={onPause}> Pause </Panel.ButtonStart>
                <Panel.Break/>
                <Panel.ButtonReset onClick={timeReset}> Timer Reset </Panel.ButtonReset>
                <Panel.ButtonReset onClick={resetPanel}> Panel Reset </Panel.ButtonReset>
            </Panel.FormContainer>
        </Panel>
    )
}

export default PanelContainer;