
export default function getNthItem(a, n) {
    // Change me!
    /* Даны два числа n и a. Напишите функцию getNthItem, которая возвращает n-й член последовательности

S[0] = 0
S[i] = a - 2*S[i-1] */
    const S = [];
    S[0] = 0;
    for (let i = 1; i <= n; i++) {
        S[i] = a - 2 * S[i - 1];
    }
    return S[n];
}
