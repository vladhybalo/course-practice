
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."

    // return str.endsWith(target); // правильне рішення, але я не шукаю легких шляхів)))
    /*
    тоже працює, але код не дуже гарно виглядить, якось по сішному
    for (let i = str.length - 1, j = target.length - 1; i >= (str.length - target.length); i--, j-- ) {
        if (str[i] !== target[j])
            return false;
    }

    return true;*/

    str = str.slice(-target.length);
    console.log(str);
    if (str === target) {
        return true;
    }
    return false;
  }
  
  console.log(confirmEnding("Bastian", "aian"));