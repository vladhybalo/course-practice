
export default function isTriangle(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return false;
    }
    return true;
}
