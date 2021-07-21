import React from 'react';
import {
    Container,
    FormContainer,
    Title,
    ButtonScoreTeamA,
    ButtonScoreTeamB,
    ButtonReset,
    ButtonStart,
    Break,
    TeamInput,
    ScoreTeam, LogoutButton, Hello, Header, BorderedContainer, Text
} from './style/panel';
import SelectInput from "../selectInput";
import {Countdown} from "../index";

export default function Panel({children, ...restProps}){

    return(
        <Container {...restProps}>{children}</Container>
    )
}

Panel.FormContainer = function ({children, ...restProps}){

    return(
        <FormContainer {...restProps}>{children}</FormContainer>
    )
}

Panel.Title = function ({children, ...restProps}){

    return(
        <Title {...restProps}>{children}</Title>
    )
}

Panel.ButtonScoreTeamA = function ({children, ...restProps}){

    return(
        <ButtonScoreTeamA {...restProps}>{children}</ButtonScoreTeamA>
    )
}

Panel.ButtonScoreTeamB = function ({children, ...restProps}){

    return(
        <ButtonScoreTeamB {...restProps}>{children}</ButtonScoreTeamB>
    )
}

Panel.ButtonStart = function ({children, ...restProps}){

    return(
        <ButtonStart {...restProps}>{children}</ButtonStart>
    )
}

Panel.ButtonReset = function ({children, ...restProps}){

    return(
        <ButtonReset {...restProps}>{children}</ButtonReset>
    )
}

Panel.Countdown = function ({ ...restProps}){

    return(
        <Countdown  {...restProps} />
    )
}

Panel.TeamInput = function ({ ...restProps}){

    return(
        <TeamInput>
            <SelectInput  {...restProps}/>
        </TeamInput>
    )
}

Panel.Break = function ({ ...restProps}){

    return(
        <Break {...restProps} />
    )
}

Panel.ScoreTeam = function ({ children,  ...restProps}){

    return(
        <ScoreTeam {...restProps} >{children}</ScoreTeam>
    )
}

Panel.Header = function ({ children,  ...restProps}){

    return(
        <Header {...restProps} >{children}</Header>
    )
}

Panel.Hello = function ({ children,  ...restProps}){

    return(
        <Hello {...restProps} >Hello! {children}</Hello>
    )
}

Panel.LogoutButton = function ({ children,  ...restProps}){

    return(
        <LogoutButton {...restProps} >{children}</LogoutButton>
    )
}

Panel.BorderedContainer = function ({ children, ...restProps}){

    return(
        <BorderedContainer { ...restProps} >{children}</BorderedContainer>
    )
}

Panel.Text = function ({ children, ...restProps}){

    return(
        <Text { ...restProps} >{children}</Text>
    )
}