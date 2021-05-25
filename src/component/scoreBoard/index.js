import React from 'react';
import {
    Container,
    Row,
    ScoreTeamA,
    ScoreTeamB,
    TeamA,
    TeamB,
    Timer,
    LogoTeamA,
    LogoTeamB,
    HelmetSVG,
    HelmetContainer,
    RKP, MainContainer, LogoContainer, BLShield
} from "./style/scoreBoard";
import _ from 'lodash';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function ScoreBoard({children, ...restProps}) {
    return(
        <MainContainer {...restProps}>{children}</MainContainer>
    )
}

ScoreBoard.Container = function ({children, ...restProps}) {

    return(
        <Container {...restProps}>{children}</Container>
    )
}

ScoreBoard.Row = function ({children, ...restProps}) {

    return(
        <Row {...restProps}>{children}</Row>
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

ScoreBoard.LogoContainer = function ({children, ...restProps}) {

    return(
        <LogoContainer {...restProps}>
            {children}
        </LogoContainer>
    )
}

ScoreBoard.RKP = function ({ ...restProps}) {

    return(
        <RKP { ...restProps}>
            <LazyLoadImage src={'/images/rkp.png'} alt="RKP" width='90' height='95' effect="blur"/>
        </RKP>
    )
}

ScoreBoard.BLShield = function ({ ...restProps}) {

    return(
        <BLShield { ...restProps}>
            <LazyLoadImage src={'/images/BC_shld.png'} alt="Shield" width='110' height='124' effect="blur"/>
        </BLShield>
    )
}

ScoreBoard.HelmetLeft = function ({ ...restProps}) {

    return(
        <HelmetSVG { ...restProps}>
            <img src={'/images/helmet_v4L.png'} alt="Helmet Left"/>
        </HelmetSVG>
    )
}

ScoreBoard.HelmetRight = function ({ ...restProps}) {

    return(
        <HelmetSVG { ...restProps}>
            <img src={'/images/helmet_v4R.png'} alt="Helmet Left"/>
        </HelmetSVG>
    )
}

ScoreBoard.HelmetContainer = function ({right = false, children, fightersLeft, ...restProps}) {
    const renderFightersLeft = ( children, fightersLeft) => {
        const array = [];
        _.times(fightersLeft, () => {
            array.push(children)
        });
        return(array)
    }
    return(
        <HelmetContainer right={right} { ...restProps}>
            {renderFightersLeft(children, fightersLeft).map((value, key)=>{
                return(<div key={key}>{value}</div>)
            })}
        </HelmetContainer>
    )
}