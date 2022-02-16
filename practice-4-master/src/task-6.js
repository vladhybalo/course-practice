
export default class EnhancedPromise extends Promise {

    static some(promises, count) {
        // Change me!
        const arr = [];
        let l = 0;
        let fail = 0;
        return new EnhancedPromise((resolve, reject) => {
            if (!promises.length) {
                resolve([]);
            }
            if (count > promises.length) {
                reject(new Error());
            }
            promises.forEach(cur => {
                cur
                    .then(p => {
                        arr.push(p);
                        l++;
                        if (l === count) {
                            resolve(arr);
                            console.log(arr);
                        }
                    })
                    .catch(() => {
                        fail++;
                        if (promises.length - fail < count) {
                            reject(new Error());
                        }
                    });
            });
        });
    }
}



/**
 *  if (map.size >= count) {
                let arr;
                for (let i = 0; i < count; i++) {
                    arr.push(map[i][1]);
                }
                resolve(...arr);
            }
 */


 // let map = new Map();
        // const arrSucc = [], arrFail = [];
        // promises.map(cur => {
        //     let now = Date.now();
        //     cur.then((a) => {

        //         //console.log(a);
        //         let t = Date.now() - now;
        //         map.set(t,a);
        //         console.log(t);
        //         arrSucc.push(t);
        //         return t;
        //     })
        //     .catch(() => {
        //         let t = Date.now() - now;
        //         console.log(t);
        //         return t;
        //     });
            
        // });
        // map = new Map([...map.entries()].sort((a,b) => {
        //     return a[0] - b[0];
        // }));
        // console.log(map);


/*
for (let i = 0; i < promises.length; i++) {
    //     promises[i]
    //         .then((a) => arr.push(a));
    //     if (arr.length === count) {
    //         console.log(success);
    //         resolve(arr);
    //     } else if (promises.length - arr.length > count){
    //         console.log('fail');
    //         reject();
    //     }
    // }
    //     // this._delete(promises,Promise.race(promises));
    //     // if (i === count)
    //     //     resolve();
    //     // if (j === promises.length - count)
    //     //     reject();
    //     // }
    // // promises.forEach(element => {
    // //     element
    // //         .then((a) => {
    // //             success++;
    // //             if (success === count) {
    // //                 resolve();
    // //             }
    // //             console.log(a);
    // //         })
    // //         .catch((aa) => {
    // //             fail++;
    // //             if (fail === promises.length - count) {
    // //                 reject();
    // //             }
    // //             console.log(aa);
    // //         });
    // // });
    // // // if (success === count) {
    // // //     resolve();
    // // // }

    */