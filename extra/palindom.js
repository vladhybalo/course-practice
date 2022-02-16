function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    console.log(str.match(/[a-z\d]/g));
    const arr = str.match(/[a-z\d]/gi);

    for(let i = 0, j = (arr.length - 1); i < arr.length; i++, j--) {
        if(arr[i] !== arr[j]){
            console.log(arr.length);
            return false;
        }
    }
    return true;
  }
  
 console.log( palindrome("A man, a plan, a canal. Panama"));