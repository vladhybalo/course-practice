function myReplace(str, before, after) {
    // кожне слово в окремий масив
    let arr = str.split(" ");

    for (let i = 0; i < arr.length; i++) {
        // переводим в нижній регістр, щоб перевірка не була чутлива до регістру
        if (arr[i].toLowerCase() === before.toLowerCase()) {
            let temp = arr[i].split("");
            // перевіряєм чи першу букву треба зробити великою
            if (temp[0].charCodeAt(0) <= "Z".charCodeAt(0)) {
                after = after.split("");
                // від аскі коду маленької букви відняти аскі код різниці маленької і великої літери
                after[0] = String.fromCharCode(after[0].charCodeAt(0) - ("a".charCodeAt(0) - "A".charCodeAt(0)) );
                after = after.join("");
            }
            arr[i] = after;
            break;
        }
    }
    str = arr.join(" ");
    return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");
