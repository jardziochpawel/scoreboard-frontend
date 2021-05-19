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
    Knight, MainContainer, LogoContainer, BLShield
} from "./style/scoreBoard";
import _ from 'lodash';

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

ScoreBoard.Knight = function ({ ...restProps}) {

    return(
        <Knight { ...restProps}>
            <img src={'/images/knight.png'} alt="Knight"/>
        </Knight>
    )
}

ScoreBoard.BLShield = function ({ ...restProps}) {

    return(
        <BLShield { ...restProps}>
            <img src={'/images/BC_shld.png'} alt="Shield"/>
        </BLShield>
    )
}

ScoreBoard.HelmetSVG = function ({ ...restProps}) {

    return(
        <HelmetSVG { ...restProps}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                 preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                    <path d="M2920 4884 c-36 -8 -110 -36 -166 -64 -55 -27 -108 -50 -117 -50 -9
0 -56 20 -104 45 -152 78 -264 92 -368 46 -45 -20 -114 -77 -144 -120 l-19
-26 97 0 c119 0 151 -15 151 -70 0 -48 -22 -55 -165 -55 -493 0 -764 -146
-885 -478 -46 -127 -61 -213 -67 -402 -7 -225 11 -384 79 -715 50 -245 51
-254 52 -430 1 -145 -2 -191 -16 -236 -23 -74 -73 -146 -126 -184 -41 -28 -49
-30 -140 -30 -85 0 -103 3 -148 27 -46 24 -98 73 -132 124 -21 31 -7 -118 18
-201 70 -222 198 -382 358 -447 50 -20 74 -23 197 -23 158 0 225 14 340 69 39
18 90 51 115 73 l44 40 -41 89 c-53 115 -99 260 -119 377 -25 141 -15 390 20
517 58 206 168 398 323 560 94 99 170 160 277 222 39 23 73 43 76 45 3 3 -8
16 -25 29 -84 68 -264 72 -449 10 -113 -38 -166 -44 -203 -23 -23 13 -68 65
-61 72 2 2 22 -2 43 -10 22 -8 48 -14 57 -15 10 0 55 34 100 75 46 42 107 92
137 112 61 41 154 73 210 73 98 0 219 -66 329 -179 l67 -68 68 16 68 16 -6 55
c-12 107 -49 189 -110 243 -72 64 -246 114 -359 102 l-51 -5 40 15 c22 9 81
23 130 31 165 29 294 0 388 -86 65 -59 105 -137 125 -245 l15 -80 186 -1 c183
-1 340 -17 491 -50 l65 -14 56 60 c101 107 146 220 156 385 7 119 -7 219 -46
333 -40 116 -84 185 -176 277 -90 91 -181 145 -286 170 -79 18 -260 18 -349
-1z" />
                    <path d="M2780 3555 c-488 -81 -853 -381 -975 -801 -54 -186 -54 -392 1 -582
35 -122 122 -295 201 -399 73 -97 79 -114 109 -310 12 -77 18 -177 18 -290 l1
-172 50 -11 c28 -6 352 -74 720 -151 369 -77 681 -143 695 -146 22 -6 20 -1
-20 44 -61 68 -117 166 -131 230 -24 104 19 172 133 213 35 12 89 31 121 42
31 11 57 23 57 27 -1 3 -76 43 -168 88 -259 127 -516 291 -806 516 -177 137
-216 176 -216 214 0 41 40 83 79 83 23 0 60 -24 158 -102 392 -315 822 -575
1092 -662 61 -20 114 -36 117 -36 4 0 4 51 1 113 l-6 114 59 44 c33 24 59 46
60 49 0 3 -39 13 -87 23 -414 84 -895 331 -1248 639 l-39 35 31 36 c48 54 60
104 40 164 -9 26 -13 51 -9 55 4 3 312 91 685 194 446 124 677 192 677 201 0
22 -191 205 -277 266 -167 119 -384 213 -591 258 -128 27 -409 35 -532 14z
m-142 -971 c12 -14 22 -38 22 -55 0 -42 -48 -89 -90 -89 -38 0 -90 47 -90 82
2 85 102 125 158 62z"/>
                    <path d="M4175 2842 c-55 -19 -101 -36 -102 -36 -1 -1 34 -117 77 -259 l78
-258 -114 -212 c-63 -117 -114 -215 -114 -218 0 -11 232 -51 240 -42 5 4 58
101 119 214 78 146 111 217 111 240 0 47 -171 609 -184 608 -6 -1 -56 -17
-111 -37z"/>
                    <path d="M3800 2728 c-58 -17 -106 -31 -107 -32 -1 -1 22 -84 52 -183 30 -100
55 -187 55 -194 0 -6 -37 -82 -82 -168 -46 -86 -84 -159 -86 -163 -4 -8 49
-33 155 -73 l62 -24 100 189 c60 111 101 200 101 217 0 15 -29 125 -65 243
-36 118 -65 215 -65 217 0 5 -13 2 -120 -29z"/>
                    <path d="M3447 2627 c-97 -28 -108 -33 -104 -51 2 -12 15 -60 28 -107 l23 -86
-38 -74 c-21 -41 -47 -88 -57 -105 l-19 -31 38 -25 c20 -14 67 -41 103 -61
l65 -37 77 144 c44 81 77 155 77 171 0 31 -72 296 -80 294 -3 0 -54 -15 -113
-32z"/>
                    <path d="M3095 2526 c-107 -31 -110 -33 -107 -59 1 -15 -4 -38 -13 -51 -16
-24 -16 -24 82 -94 l98 -71 33 57 c52 92 58 120 36 190 l-19 59 -110 -31z"/>
                    <path d="M1972 674 c-51 -103 -91 -188 -89 -191 3 -2 332 -53 733 -114 401
-60 844 -127 984 -148 140 -21 256 -38 256 -37 4 4 -166 346 -171 346 -4 0
-368 74 -809 165 -441 91 -804 165 -806 165 -3 0 -47 -84 -98 -186z"/>
                </g>
            </svg>
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