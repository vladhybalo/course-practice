function reverseString(str) {
  str = str.split("");
  str.reverse();
  str = str.join("");
  console.log(str);
  return str;
}

reverseString("hello");