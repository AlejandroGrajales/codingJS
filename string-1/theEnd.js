function theEnd(str, front){
  let newStr;
  if(front) {
    newStr = str.substring(0, 1);
  } else {
    newStr = str.substring(str.length - 1);
  }
  return newStr;
}