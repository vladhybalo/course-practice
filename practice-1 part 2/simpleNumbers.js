
(function findSimple1(num) {
    let sum = 0;
    let i,j;
    // let start = new Date().getTime();
    for ( i = 1; i <= num; i++) {
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (i === j) {
            sum += i;
        }
    }
    // let finish = new Date().getTime();
    // console.log((finish - start)/1000);
    console.log(sum);
})(1000);

