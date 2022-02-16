
function findLongestWord(str) {
    //розбиваєм строку на масив слів
    const arr = str.split(" ");
   
    //ідем по масиву і перевіряєм довжини
    let longest = arr.reduce((prev,cur) => {
        if(cur.length > prev.length) {
            return prev = cur;
        }
        return prev;
    }).length; // повертається найдовше слово, берем його довжину

    return longest;
  }
  
  findLongestWord("The quick brown fox jumped over the lazy dog");
  