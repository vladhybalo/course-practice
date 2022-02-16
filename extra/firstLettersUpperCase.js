
function titleCase(str) {
    str = str.toLowerCase();
    let arr = str.split(" ");

    arr = arr.map(cur => {
        // перша буква до верхнього регістру + решта слова без першої букви
        return cur[0].toUpperCase() + cur.slice(1);
    });
    str = arr.join(" ");
    console.log(str);
    return str;
  }
  
  titleCase("I'm a little tea pot");
  