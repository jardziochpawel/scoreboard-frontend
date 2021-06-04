import React, { useEffect } from 'react';
import { ScoreBoard } from "../component";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";
import { SCOREBOARD } from "../static/data";

export default function ScoreBoardContainer(socket){

    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard', SCOREBOARD);

    useEffect(() => {
        socket.socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, setScoreboard]);

    let seconds = ("0" + (Math.floor((scoreboard.time / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((scoreboard.time / 60000) % 60)).slice(-2);

    let countdown = useCountdown(minutes, seconds, socket, scoreboard);

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
                    <ScoreBoard.Timer>{countdown}</ScoreBoard.Timer>
                    <ScoreBoard.ScoreTeamB>{scoreboard.pointsTeamB}</ScoreBoard.ScoreTeamB>
                    <ScoreBoard.TeamB>{scoreboard.teamB.value}</ScoreBoard.TeamB>
                </ScoreBoard.Row>
            </ScoreBoard.Container>
            <ScoreBoard.LogoContainer>
                <ScoreBoard.LogoTeamB logo={scoreboard.teamB.logo}/>
            </ScoreBoard.LogoContainer>
            {/*<ScoreBoard.BLShield />*/}
        </ScoreBoard>
    )
}