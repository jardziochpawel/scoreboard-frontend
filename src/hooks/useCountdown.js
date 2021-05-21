import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";
import usePrevious from "./usePrevious";

export default function useCountdown(seconds = 0, start = false, pause = false, reset = false, timerResetDone) {
    const [timeLeft, setTimeLeft] = useLocalStorage('time-left', seconds);

    if(reset !== false && seconds !== timeLeft){
        setTimeLeft(seconds);
        timerResetDone();
    }

    if(usePrevious(seconds) !== seconds && seconds !== timeLeft && !start && !pause){
        setTimeLeft(seconds);
    }

    useEffect(() => {

        if(!start) return timeLeft;

        if(pause) return timeLeft;

        if (!timeLeft) return timeLeft;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 10);
        }, 10);

        return () => clearInterval(intervalId);

    }, [seconds, start, pause, timeLeft, setTimeLeft, timerResetDone]);

    return timeLeft;
}