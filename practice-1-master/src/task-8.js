// array.map
export default function getTopLetter(str) {
    const map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            map.set(str[i], map.get(str[i]) + 1);
        } else {
            map.set(str[i], 1);
        }
    }
    let max = 0;
    let maxPair = [];
    for (const curr of map) {
        if (curr[1] > max) {
            max = curr[1];
            maxPair = curr;
        }
    }
    return maxPair[0];
}
