import React from 'react';
import {
    Container,
    FormContainer,
    Title,
    ButtonScoreTeamA,
    ButtonScoreTeamB,
    ButtonReset,
    ButtonStart,
    TimerInput,
    Countdown,
    Break,
    TeamInput,
    ScoreTeam
} from './style/panel';
import TimeInput from "../../helpers/TimeInput";
import fancyTimeFormat from "../../helpers/fancyTimeFormat";
import SelectInput from "../selectInput";

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

Panel.TimerInput = function ({disabled, cd, start, setValue, value, onChange, ...restProps}){

    return(
        <>

            <TimerInput {...restProps}>
                {(start || disabled) && <Countdown>
                    {fancyTimeFormat(cd)}
                </Countdown>}

                {!disabled && <TimeInput setValue={setValue}
                                      value={fancyTimeFormat(value)}
                                      onTimeChange={onChange}
                                      start={start}
                                      hidden={start}
                                      disabled={disabled}
                />}
            </TimerInput>
        </>
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