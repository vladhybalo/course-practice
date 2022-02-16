function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    const srcLength = Object.keys(source).length;
  
     for (let i = 0; i < collection.length; i++) {
        let counter = 0;
        for (let srCur in source) {
            if (source[srCur] === collection[i][srCur]) {
                counter++;
            } else {
                break;
            }
        }
        console.log(counter);
        if (counter === srcLength) {
            arr.push(collection[i]);
        }
    }
    console.log(arr);
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
  