
export default function merge(data) {
    const myObj = {};
    for (const currPackage of data) {
         for (const currPair in currPackage) {
            if (currPair in myObj) {
                myObj[currPair].push(currPackage[currPair]);
            } else {
                myObj[currPair] = [currPackage[currPair]];
            }
        }
    }
    return myObj;
}
