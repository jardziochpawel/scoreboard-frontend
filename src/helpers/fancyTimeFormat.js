export default function fancyTimeFormat(duration)
{
    let mins = ~~((duration % 3600) / 60);
    let secs = ~~duration % 60;

    let ret = "";

    ret += "" + (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}