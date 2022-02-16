//reduse
export default function getStats(data) {
    const result = {
        min: null,
        max: null,
        avg: null
    };
    if (!data.length) {
        return result;
    }
    result.max = data[0];
    result.min = data[0];
    let avg = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] > result.max) {
            result.max = data[i];
        }
        if (data[i] < result.min) {
            result.min = data[i];
        }
        avg += data[i];
    }
    result.avg = avg / data.length;
    return result;
}
