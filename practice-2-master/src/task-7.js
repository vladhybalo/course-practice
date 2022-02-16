
export default function getPolynomial(...coefficients) {
    // Change me!
    /*
    Напишите функцию с переменным числом аргументов, которая возвращает строку с многочленом, в качестве 
    коэффициентов которого выступают аргументы функции. Нулевых слагаемых не должно быть в полиноме.
     Если коэффициент равен 1 или -1, то слагаемое должно иметь вид "+x^n" или "-x^n".

    Например: getPolynomial(-2, 3) должен вернуть многочлен первой степени "-2*x+3". А getPolynomial(1, 0, 0)
    должен сформировать многочлен с единственным слагаемым "x^2";

    getPolynomial() === "0";
    getPolynomial(-2, 3) === "-2*x+3";
    getPolynomial(1, 0, 0) === "x^2";
    getPolynomial(8, 3.5, -1, 0, 12) === "8*x^4+3.5*x^3-x^2+12";
    */

    let degree = coefficients.length;

    let str = coefficients.reduce((prev, cur) => {
        degree--;
        if (cur === 0) {
            return prev;
        }
        // ставим знак і берем по модулю
        if (cur > 0 && prev) {
            prev += "+";
        } else if (cur < 0) {
            prev += "-";
        }
        cur = Math.abs(cur);

        // перевірка чи треба підносити х до степені
        switch (degree) {
            case 0:
                prev += cur;
                break;
            case 1:
                cur = ifCurOne(cur);
                prev += `${cur}x`;
                break;
            default:
                cur = ifCurOne(cur);
                prev += `${cur}x^${degree}`;
                break;
        }
        return prev;
    }, "");
    if (!str) {
        str = "0";
    }
    return str;
}

function ifCurOne(cur) {
    if (cur === 1) {
        return "";
    }
    return `${cur}*`;
}
