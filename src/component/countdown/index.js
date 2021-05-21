import React from 'react';
import {Countdown} from "./countdown";
import useCountdown from "../../hooks/useCountdown";

export default function CountdownContainer({timerTime, timerChange, timerOn, timerReset, timerResetDone, timerPause}) {

    const adjustTimer = input => {
        if (!timerOn) {
            if (input === "incMinutes" && timerTime + 60000 < 216000000) {
                timerChange(timerTime + 60000 );
            } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                timerChange(timerTime - 60000)
            } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
                timerChange(timerTime + 1000)
            } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
                timerChange(timerTime - 1000)
            }
        }
    };

    let countdown = useCountdown(timerTime, timerOn, timerPause, timerReset, timerResetDone);
    let seconds = ("0" + (Math.floor((countdown / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((countdown / 60000) % 60)).slice(-2);

    if(timerOn){

        return (
            <Countdown>
                <Countdown.Time>
                    {minutes} : {seconds}
                </Countdown.Time>
            </Countdown>
        )
    }

    return(
        <Countdown>
            <Countdown.Display>
                <Countdown.Button onClick={() => adjustTimer("incMinutes")}>
                    &#8679;
                </Countdown.Button>
                <Countdown.Button onClick={() => adjustTimer("incSeconds")}>
                    &#8679;
                </Countdown.Button>

                <Countdown.Time>
                    {minutes} : {seconds}
                </Countdown.Time>

                <Countdown.Button onClick={() => adjustTimer("decMinutes")}>
                    &#8681;
                </Countdown.Button>
                <Countdown.Button onClick={() => adjustTimer("decSeconds")}>
                    &#8681;
                </Countdown.Button>
            </Countdown.Display>
        </Countdown>
    )
    
}