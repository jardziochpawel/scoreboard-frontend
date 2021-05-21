import React, {useEffect} from 'react';
import {Panel} from "../component";
import {SCOREBOARD, TEAMS, ENDPOINT} from "../static/data";
import useLocalStorage from "../hooks/useLocalStorage";

const PanelContainer = () => {
    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard',SCOREBOARD);

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
        submitData({...scoreboard, start: true});
    }

    const onPause = () => {
        submitData({...scoreboard, pause: true});
    }

    const onResume = () => {
        submitData({...scoreboard, pause: false});
    }

    const timeReset = () => {
        submitData({...scoreboard, start: false, reset: true, pause: false});
    }

    const timeResetDone = () => {
        submitData({...scoreboard, start: false, reset: false, pause: false});
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
                <Panel.Countdown
                    timerPause={scoreboard.pause}
                    timerOn={scoreboard.start}
                    timerReset={scoreboard.reset}
                    timerResetDone={timeResetDone}
                    timerChange={onChange}
                    timerTime={scoreboard.time}
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
                {!scoreboard.start && <Panel.ButtonStart onClick={onStart}> Start </Panel.ButtonStart>}
                {scoreboard.start && <Panel.ButtonStart onClick={onResume}> Resume </Panel.ButtonStart>}
                <Panel.ButtonStart onClick={onPause}> Pause </Panel.ButtonStart>
                <Panel.Break/>
                <Panel.ButtonReset onClick={timeReset}> Timer Reset </Panel.ButtonReset>
                <Panel.ButtonReset onClick={resetPanel}> Panel Reset </Panel.ButtonReset>
            </Panel.FormContainer>
        </Panel>
    )
}

export default PanelContainer;