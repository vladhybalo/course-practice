
function uniteUnique(...arr) {
    let set = new Set();
    //set.set(arr);
    arr.map(cur => {
        cur.map(temp => {
            set.add(temp);
        });
    });
    arr.splice(0);
    arr.push(...set);
    return arr;
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);