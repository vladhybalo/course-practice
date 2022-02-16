// plice ???
function myReplace(str, before, after) {
    let indexBefore = str.indexOf(before);
    // console.log(indexBefore);
    // console.log(str[indexBefore + before.length - 1]);
    // str.slice(indexBefore, indexBefore + before.length);
    let newStr = "";
    let newAft = "";
    //врахування регістру 
    for (let i = 0; i < before.length, i < after.length; i++) {
        if (before.charCodeAt(i) < "a".charCodeAt(0)) {
            newAft += after[i].toUpperCase();
        } else {
            newAft += after[i].toLowerCase();
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (i >=indexBefore && i < (indexBefore + before.length)) {
            newStr += newAft[i - indexBefore];
            continue;
        }
        newStr += str[i];
    }   
    console.log(Number(newStr.charCodeAt(4)));
    console.log(newStr);
    return str;
  }
  
  myReplace("A quick brown fox jUmped over the lazy dog", "jUmped", "leaPed");