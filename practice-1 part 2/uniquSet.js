function findUnique(...args) {
    let arr = [];
    arr = arr.concat(...args);//обєднує масиви, оператор "..." розгоне масив 2Д в 2 простих масиви
   
    function mySort(a,b) {
        return a - b;
    }

    arr.sort(mySort);//інакше буде сортувати з приведенням до строки
    let set = new Set(arr);
    console.log(set);
    return set;
  }
  
findUnique([1, 2, 3], [5, 2, 1, 4]);