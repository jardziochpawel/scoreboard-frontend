import React from 'react';
import {Countdown} from "./countdown";
import useCountdown from "../../hooks/useCountdown";

export default function CountdownContainer({timerTime, timerChange, timerOn, timerPause, socket, scoreboard}) {

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

    let countdown = useCountdown( socket, scoreboard );

    if(timerOn || timerPause){

        return (
            <Countdown>
                <Countdown.Time>
                    {countdown}
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
                    {countdown}
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