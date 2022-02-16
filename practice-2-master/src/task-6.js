//import { config } from "chai/lib/chai";

//import { config } from "chai/lib/chai";
let result = "";
const arr = [];
export default function findPath(obj) {
    // Change me!
    /*
    Напишите функцию, принимающую к качестве аргумента объект с данными, и возвращающую путь, по которому в этом объекте 
    находится поле со значением 15. Путь - это строка, в которую входят все имена полей начиная от самого верхнего уровня,
    разделенные точкой. Значениями свойств объекта могут быть как простые значения, так и другие объекты и массивы. 
    Если значение найти не удалось, вернуть null. В объекте всегда не больше одного значения 15.

    Для проверки является ли значение объектом или массивом вы можете использовать проверку
    if (typeof obj[key] === "object"). В реальной жизни нужно использовать более сложные проверки,
    но для нашего случая подойдет упрощенный вариант. Также в этом примере вы можете использовать цикл for .. in
    для перебора свойств объекта.

    Пример:

    let obj = {
        field1: "hello, world",
        name: "Johnny",
        t: 99,
        almostthere: "15",
        subobj: {
            name: 13,
            arr: [
                { g: -4, k: 1 },
                { test: NaN, x: 15 }
            ]
        },
        test: "g"
    }
    findPath(obj) === "subobj.arr.1.x"
    
    */

    if (typeof obj !== "object") {
        return null;
    }
       
    // for of + Object.entries
    // k - назва поля obj[k] - значення
    for (const k in obj) {
        // lint err
        if (!obj.hasOwnProperty(k)) {
            continue;
        }
        arr.push(k);
        if (obj[k] === 15) {
            // знайшли шукане поле і зберегли значення з масиву в строку
            result = arr.join(".");
        }
        if (typeof obj[k] === "object") {
            findPath(obj[k]);
        }
        arr.pop();
    }
    if (result === "") {
        return null;
    }
    return result;
}
// )({
//     field1: "hello, world",
//     name: "Johnny",
//     t: 99,
//     almostthere: "15",
//     subobj: {
//         name: 13,
//         arr: [
//             { g: -4, k: 1 },
//             { test: NaN, x: 15 }
//         ]
//     },
//     test: "g"
// });
