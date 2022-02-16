function largestOfFour(arr) {
    // You can do this!
    const result = arr.map(cur => {
        return cur.reduce((prev,cur) => {
            if (cur > prev) {
                return cur;
            }
            return prev;
        })
    })
    console.log(result);
    return result;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  