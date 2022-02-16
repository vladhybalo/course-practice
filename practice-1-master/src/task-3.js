
export default function sumDigits(n) {
    // Change me!
    /*
    Дано натуральное число x. Напишите функцию sumDigits, которая будет подсчитывать сумму всех цифр этого числа.
    */
    let sum = 0;
    while (n > 10) {
        sum += n % 10;
        n = (n - n % 10) / 10;
    }
    sum += n;
    return sum;
}


