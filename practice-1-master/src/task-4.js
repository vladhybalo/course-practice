
 export default function formatTime(seconds) {
    let str = "";
    let time = [];
    let divider = 3600;
    
    for (let i = 0; i < 3; i++) {
        time[i] = Math.floor(seconds / divider);
        seconds -= time[i] * divider;
        divider = 60;
        if (time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }

    time[3] = 'AM';

    if (time[0] > 12) {
        time[0] -= 12;
        time[3] = 'PM';
    }

    time[0] = (time[0] < 1) ? 12: time[0];

    str = `${time[0]}:${time[1]}:${time[2]} ${time[3]}`;
    return str;
}
