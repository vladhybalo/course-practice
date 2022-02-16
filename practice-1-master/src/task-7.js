
export default function unique(data) {
    const set = new Set(data);
    const arr = [];
    set.forEach(currNumer => arr.push(currNumer));
    return arr;
}
