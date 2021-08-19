export default function getSecondsFromMMSS  (value) {
    const [str1, str2, str3] = value.split(":");

    const val1 = parseInt(str1, 10);
    const val2 = parseInt(str2, 10);
    const val3 = parseInt(str3, 10);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
        // seconds
        return val1 * 1000;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
        // minutes * 60 + seconds
        return ( val1 * 60 * 1000 ) + ( val2 * 1000 );
    }

    return 0;
};