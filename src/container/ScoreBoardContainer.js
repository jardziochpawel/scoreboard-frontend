import React, { useEffect } from 'react';
import { ScoreBoard } from "../component";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";
import {useQuery} from "../hooks/useQuery";

export default function ScoreBoardContainer({socket, scoreboardFetch}){

    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard', scoreboardFetch);

    let query = useQuery();
    let countdown;
    let tournament = query.get('tournament');

    useEffect(() => {
        socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, scoreboard]);

    countdown = useCountdown(socket, scoreboard);

    if(!scoreboard){
        return(<div>Loading....</div>)
    }

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
                    <ScoreBoard.RKP tournament={tournament}/>
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
            {tournament !== 'pl' && <ScoreBoard.BLShield/>}
        </ScoreBoard>
    )
}