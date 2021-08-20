import React, {useEffect, useState} from 'react';
import { ScoreBoard } from "../component";
import useCountdown from "../hooks/useCountdown";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ScoreBoardContainer({socket, scoreboardFetch}){

    const [scoreboard, setScoreboard] = useLocalStorage('scoreboard', scoreboardFetch);
    const [className, setClassName] = useState('');
    let countdown;

    useEffect(() => {
        socket.on("scoreboard-app-data", data => {
            setScoreboard(data);
        });

    }, [socket, scoreboard]);

    countdown = useCountdown(socket, scoreboard);

    if(!scoreboard){
        return(<div>Loading....</div>)
    }

    if(scoreboard.pause){
        setTimeout(()=>setClassName('flip-horizontal-bottom'), 3000);
    }

    if(!scoreboard.pause){
        setTimeout(()=>setClassName(''), 200);
    }
    return(
        <ScoreBoard>

            <ScoreBoard.Container left={scoreboard.pause}>
                {scoreboard.pause && <ScoreBoard.Row left={true}>
                    <ScoreBoard.LiveContainer className={className}>
                        <ScoreBoard.LiveText>Live</ScoreBoard.LiveText>
                    </ScoreBoard.LiveContainer>
                    <ScoreBoard.TeamA>{scoreboard.teamA.value}</ScoreBoard.TeamA>
                    <ScoreBoard.ScoreTeamA>{scoreboard.pointsTeamA}</ScoreBoard.ScoreTeamA>
                    <div>-</div>
                    <ScoreBoard.ScoreTeamB>{scoreboard.pointsTeamB}</ScoreBoard.ScoreTeamB>
                    <ScoreBoard.TeamB>{scoreboard.teamB.value}</ScoreBoard.TeamB>
                </ScoreBoard.Row>}

                {!scoreboard.pause && <ScoreBoard.Row>
                    <ScoreBoard.HelmetContainer fightersLeft={scoreboard.fightersTeamA}>
                        <ScoreBoard.HelmetLeft/>
                    </ScoreBoard.HelmetContainer>

                    <ScoreBoard.LogoContainer>
                        <ScoreBoard.LogoTeamA logo={scoreboard.teamA.logo}/>
                    </ScoreBoard.LogoContainer>

                    <ScoreBoard.Timer>{countdown}</ScoreBoard.Timer>

                    <ScoreBoard.LogoContainer>
                        <ScoreBoard.LogoTeamB logo={scoreboard.teamB.logo}/>
                    </ScoreBoard.LogoContainer>

                    <ScoreBoard.HelmetContainer right={true} fightersLeft={scoreboard.fightersTeamB}>
                        <ScoreBoard.HelmetRight/>
                    </ScoreBoard.HelmetContainer>
                </ScoreBoard.Row>}

            </ScoreBoard.Container>
        </ScoreBoard>
    )
}