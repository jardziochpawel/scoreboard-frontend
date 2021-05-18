export default function getSecondsFromMMSS  (value) {
    const [str1, str2, str3] = value.split(":");

    const val1 = Number(str1);
    const val2 = Number(str2);
    const val3 = Number(str3);

    if (!isNaN(val1) && isNaN(val2) && isNaN(val3)) {
        // seconds
        return val1;
    }

    if (!isNaN(val1) && !isNaN(val2) && isNaN(val3)) {
        // minutes * 60 + seconds
        return val1 * 60 + val2;
    }

    return 0;
};