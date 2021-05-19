import React, { useEffect } from 'react';
import { ScoreBoard } from "../component";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";
import fancyTimeFormat from "../helpers/fancyTimeFormat";
import {SCOREBOARD} from "../static/data";

export default function ScoreBoardContainer(socket){

    const [scoreboard, setScoreboard] = useLocalStorage('data', SCOREBOARD);

    useEffect(() => {
        socket.socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, setScoreboard]);

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
                    <ScoreBoard.HelmetContainer right={true} fightersLeft={scoreboard.fightersTeamB}>
                        <ScoreBoard.HelmetRight />
                    </ScoreBoard.HelmetContainer>
                </ScoreBoard.Row>
                <ScoreBoard.Row>
                    <ScoreBoard.TeamA>{scoreboard.teamA.value}</ScoreBoard.TeamA>
                    <ScoreBoard.ScoreTeamA>{scoreboard.pointsTeamA}</ScoreBoard.ScoreTeamA>
                    <ScoreBoard.Timer>{fancyTimeFormat(useCountdown(scoreboard.time, scoreboard.start, scoreboard.reset))}</ScoreBoard.Timer>
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