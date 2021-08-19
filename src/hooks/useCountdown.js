import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";
import getSecondsFromMMSS from "../helpers/getSecondsFromMMSS";

export default function useCountdown(socket, scoreboard) {
    let time = scoreboard ? scoreboard.time : 0;
    let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    const [timeLeft, setTimeLeft] = useLocalStorage('countdown', minutes + ' : ' + seconds);
    socket.emit('timer-data', scoreboard);

    useEffect(() => {
        if(scoreboard.time < getSecondsFromMMSS(timeLeft)){
            setTimeLeft(minutes + ' : ' + seconds);
        }
        console.log(timeLeft);
        socket.on("timer", data => {
            setTimeLeft(data);
        });

    }, [scoreboard, socket, timeLeft, setTimeLeft]);

    return timeLeft;
}