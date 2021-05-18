import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";

export default function useCountdown(seconds = 0, start = false, reset = false) {
    const [timeLeft, setTimeLeft] = useLocalStorage('time-left', seconds);

    if(reset !== false && seconds !== timeLeft){
        setTimeLeft(seconds);
    }

    useEffect(() => {

        if(!start) return timeLeft;

        if (!timeLeft) return timeLeft;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [seconds, start, timeLeft, setTimeLeft]);

    return timeLeft;
}