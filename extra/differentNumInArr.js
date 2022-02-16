
function diffArray(arr1, arr2) {
    const map = new Map();
    arr1.map(cur=> {
        if (!map.has(cur)) {
            map.set(cur,1);
        } else {
            map.set(cur, map.get(cur) + 1);
        }
    });
    arr2.map(cur => {
        if (!map.has(cur)) {
            map.set(cur,1);
        } else {
            map.set(cur, map.get(cur) + 1);
        }
    });
    
    console.log(map);
    let newArr = [];
     map.forEach((value, key) => {
         console.log(key);
        if (value === 1) {
            newArr.push(key);
        }
    });
    console.log(newArr);
    return newArr;
  }
  
  diffArray([1,1,1, 2, 3, 5,11], [1, 2, 3, 4, 5]);
