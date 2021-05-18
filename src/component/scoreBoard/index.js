import React from 'react';
import {Container, ScoreTeamA, ScoreTeamB, TeamA, TeamB, Timer, LogoTeamA, LogoTeamB} from "./style/scoreBoard";

export default function ScoreBoard({children, ...restProps}) {
    return(
        <Container {...restProps}>{children}</Container>
    )
}

ScoreBoard.ScoreTeamA = function ({children, ...restProps}) {

    return(
        <ScoreTeamA {...restProps}>{children}</ScoreTeamA>
    )
}

ScoreBoard.ScoreTeamB = function ({children, ...restProps}) {

    return(
        <ScoreTeamB {...restProps}>{children}</ScoreTeamB>
    )
}

ScoreBoard.TeamA = function ({children, ...restProps}) {

    return(
        <TeamA {...restProps}>{children}</TeamA>
    )
}

ScoreBoard.TeamB = function ({children, ...restProps}) {

    return(
        <TeamB {...restProps}>{children}</TeamB>
    )
}

ScoreBoard.Timer = function ({children, ...restProps}) {

    return(
        <Timer {...restProps}>{children}</Timer>
    )
}

ScoreBoard.LogoTeamA = function ({ ...restProps}) {

    return(
        <LogoTeamA {...restProps}/>
    )
}

ScoreBoard.LogoTeamB = function ({ ...restProps}) {

    return(
        <LogoTeamB {...restProps}/>
    )
}