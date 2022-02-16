function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length <= num)
      return str;
    str = str.slice(0,num-3) + "...";
    return str;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));