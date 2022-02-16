
function chunkArrayInGroups(arr, size) {
    // Break it up.

    const newArr = [];
    for(let i = 0; i < arr.length / size; i++) {
        newArr.push(arr);
        
    }
    for(let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].splice(0, size); // вирізає не тільки в newArr[i] а в усіх  підмасивах newArr   
        console.log(newArr);
    }
    return arr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)