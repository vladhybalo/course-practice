import { getJSON } from "./task-1.js";



export default async function getSequential(urls) {
    // Change me!

    /*
        Hапишите функцию getSequential(urls), которая принимает массив url, и вызывает их последовательно
        с помощью getJSON. Функция возвращает промис, который разрешится при выполнении всех вызовов, или
        будет отклонен если любой из вызовов получит отказ.

        Промис разрешается в массив ответов. Если какой-либо из вызовов получает отказ, то промис должен быть
        отклонен со значением Error(“failed to fetch ${url}”)

    */

    /*
            const p = getSequential(["/test/200/5", "/test/200/6", "/test/200/7", "/test/404", "/test/200/8"]);
        return assert.isRejected(p, Error, "failed to fetch /test/404");
    */
    const array = [];
    // можна просто через цикл перебирати, без рекурсії
    // return new Promise((resolve, reject) => recusia(urls, 0, array)
    //     .then(resolve)
    //     .catch(reject));
    return new Promise((resolve, reject) => {
        for(let i = 0; i < urls.length; i++) {
            let v = await getJSON(urls[i]);
                // .catch(reject(new Error(`failed to fetch ${urls[i]}`)))
                // .then(temp => array.push(temp))
                
        }
        resolve(array);
    })
}

function recusia(urls, i, array) {
    return getJSON(urls[i])
        .catch(() => {
            throw new Error(`failed to fetch ${urls[i]}`);
        })
        .then(b => {
            if (i + 1 < urls.length) {
                array.push(b);
                i++;
                return recusia(urls, i, array);
            } else {
                array.push(b);
                return array;
            }
        });
}
