import { getJSON } from "./task-1.js";


export default function getSeries(url1, url2) {
    // Change me!
    const arr = [];
    return getJSON(url1)
        .then(a => {
            arr.push(a);
            return getJSON(url2)
                .then(b => {
                    arr.push(b);
                    return arr;
                });
        })
        .catch(() => {
            if (arr.length < 1) {
                throw new Error("First fetch failed");
            }
            throw new Error("Second fetch failed");
        });
}
