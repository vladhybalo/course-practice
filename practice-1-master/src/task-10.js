
export default function convertToRoman(number) {
    // Change me!
    //  let number=1989;
    let str = "";
   
    let map = new Map([
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ])

    for(let cur of map) {
        console.log(cur);
        console.log(number);
        while (cur[0] <= number) {
            console.log(number);
            number -= cur[0];
            str += cur[1];
        }
    }
    console.log(str);
    return str;
};
