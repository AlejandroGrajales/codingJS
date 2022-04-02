function extraFront(str){
  let newStr = str.substring(0, 2);
  if(str.length <= 1){
    return str + str + str;
  }
  return newStr + newStr + newStr;
}