import { useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";

export default function useCountdown(minutes, seconds, socket, scoreboard) {
    const [timeLeft, setTimeLeft] = useLocalStorage('countdown', minutes + ' : ' + seconds);

    socket.socket.emit('timer-data', scoreboard);

    useEffect(() => {

        socket.socket.on("timer", data => {
            setTimeLeft(data);
        });

    }, [socket, timeLeft, setTimeLeft]);

    return timeLeft;
}