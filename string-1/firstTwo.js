function firstTwo(str){
  if(str.length < 2) {
    return str;
  } else {
    let newStr = str.substring(0, 2);
    return newStr;
  }
}