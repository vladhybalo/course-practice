
function rot13(str) { // LBH QVQ VG!
    str = str.toUpperCase();
    const arr = [];
    console.log(str.charCodeAt(0));
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 'Z'.charCodeAt(0) || str.charCodeAt(i) < 'A'.charCodeAt(0)) {
            arr.push(str.charCodeAt(i));
            continue;
        }
        if (str.charCodeAt(i) + 13 > 'Z'.charCodeAt(0)) {
            arr.push(str.charCodeAt(i) + 12 - ('Z'.charCodeAt(0) - 'A'.charCodeAt(0)));
            continue;
        }
        arr.push(str.charCodeAt(i) + 13);
    }
    str = String.fromCharCode(...arr);
    console.log(str);
    return str;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");
