function twoChar(str, index){ 
  let newStr = str.substring(index, index + 2);
  if(newStr.length < 2){
    return str.substring(0, 2);
  }
  return newStr;
}