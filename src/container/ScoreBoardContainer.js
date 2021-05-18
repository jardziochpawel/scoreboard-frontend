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
            <ScoreBoard.LogoTeamA logo={scoreboard.teamA.logo}/>
            <ScoreBoard.TeamA>{scoreboard.teamA.value}</ScoreBoard.TeamA>
            <ScoreBoard.ScoreTeamA>{scoreboard.fightersTeamA}</ScoreBoard.ScoreTeamA>
            <ScoreBoard.ScoreTeamA>{scoreboard.pointsTeamA}</ScoreBoard.ScoreTeamA>
            <ScoreBoard.Timer>{fancyTimeFormat(useCountdown(scoreboard.time, scoreboard.start, scoreboard.reset))}</ScoreBoard.Timer>
            <ScoreBoard.ScoreTeamB>{scoreboard.pointsTeamB}</ScoreBoard.ScoreTeamB>
            <ScoreBoard.ScoreTeamB>{scoreboard.fightersTeamB}</ScoreBoard.ScoreTeamB>
            <ScoreBoard.TeamB>{scoreboard.teamB.value}</ScoreBoard.TeamB>
            <ScoreBoard.LogoTeamB logo={scoreboard.teamB.logo}/>
        </ScoreBoard>
    )
}