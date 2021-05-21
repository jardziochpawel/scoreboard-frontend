import React, { useEffect } from 'react';
import { ScoreBoard } from "../component";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";
import {ENDPOINT, SCOREBOARD} from "../static/data";

export default function ScoreBoardContainer(socket){

    const [scoreboard, setScoreboard] = useLocalStorage('data', SCOREBOARD);

    useEffect(() => {
        socket.socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, setScoreboard]);

    const submitData = ( data) => {
        fetch(ENDPOINT+'/scoreboard/60a17e5c75ef8d9af22dd94c', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: new Headers([
                ['Content-Type', 'application/json']
            ])
        }).then(res => res.json()).then(data=>setScoreboard(data)).catch(err=>console.log(err));
    }

    const timeResetDone = () => {
        submitData({...scoreboard, start: false, reset: false, pause: false});
    }

    let countdown = useCountdown(scoreboard.time, scoreboard.start, scoreboard.pause, scoreboard.reset, timeResetDone);
    let seconds = ("0" + (Math.floor((countdown / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((countdown / 60000) % 60)).slice(-2);

    return(
        <ScoreBoard>
            <ScoreBoard.LogoContainer>
                <ScoreBoard.LogoTeamA logo={scoreboard.teamA.logo}/>
            </ScoreBoard.LogoContainer>
            <ScoreBoard.Container>
                <ScoreBoard.Row>
                    <ScoreBoard.HelmetContainer fightersLeft={scoreboard.fightersTeamA}>
                        <ScoreBoard.HelmetLeft />
                    </ScoreBoard.HelmetContainer>
                    <ScoreBoard.RKP />
                    <ScoreBoard.HelmetContainer right={true} fightersLeft={scoreboard.fightersTeamB}>
                        <ScoreBoard.HelmetRight />
                    </ScoreBoard.HelmetContainer>
                </ScoreBoard.Row>
                <ScoreBoard.Row>
                    <ScoreBoard.TeamA>{scoreboard.teamA.value}</ScoreBoard.TeamA>
                    <ScoreBoard.ScoreTeamA>{scoreboard.pointsTeamA}</ScoreBoard.ScoreTeamA>
                    <ScoreBoard.Timer>{minutes} : {seconds}</ScoreBoard.Timer>
                    <ScoreBoard.ScoreTeamB>{scoreboard.pointsTeamB}</ScoreBoard.ScoreTeamB>
                    <ScoreBoard.TeamB>{scoreboard.teamB.value}</ScoreBoard.TeamB>
                </ScoreBoard.Row>
            </ScoreBoard.Container>
            <ScoreBoard.LogoContainer>
                <ScoreBoard.LogoTeamB logo={scoreboard.teamB.logo}/>
            </ScoreBoard.LogoContainer>
            <ScoreBoard.BLShield />
        </ScoreBoard>
    )
}