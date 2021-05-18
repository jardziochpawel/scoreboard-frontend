import React from 'react';
import getSecondsFromMMSS from "./getSecondsFromMMSS";
import fancyTimeFormat from "./fancyTimeFormat";

const TimeInput = ({value, setValue, hidden, disabled = false}) => {

    const onChange = (event) => {
        const val = event.target.value;
        if(isValid(val)) {
            setValue(val);
        }
    };

    const onBlur = (event) => {
        const value = event.target.value;
        const seconds = Math.max(0, getSecondsFromMMSS(value));
        const time = fancyTimeFormat(seconds);

            setValue(time);
    };

    const isValid = (val) => {
        const regexp = /^\d{0,2}?:?\d{0,2}$/;

        const [minutesStr, secondsStr] = val.split(':');

        if (!regexp.test(val)) {
            return false;
        }

        const seconds = Number(secondsStr);
        const minutes = Number(minutesStr);

        const isValidMinutes = (min ) => Number.isInteger(min) && min >= 0 && min < 59;
        const isValidSeconds = (sec) => (Number.isInteger(sec) && minutes >= 0 && minutes < 59) || Number.isNaN(sec);
        if (!isValidSeconds(seconds) || !isValidMinutes(minutes)) {
            return false;
        }

        if (minutes < 10 && Number(minutesStr[0]) > 5) {
            return false;
        }

        const valArr = val.indexOf(':') !== -1
            ? val.split(':')
            : [val];

        // check mm and ss
        if (valArr[0] && valArr[0].length && (parseInt(valArr[0], 10) < 0 || parseInt(valArr[0], 10) > 59)) {
            return false;
        }

        return !(valArr[1] && valArr[1].length && (parseInt(valArr[1], 10) < 0 || parseInt(valArr[1], 10) > 59));


    }

    return (
        <input type="tel" onChange={onChange} onBlur={onBlur} value={value} hidden={hidden} disabled={disabled}/>
    );
};

export default TimeInput;