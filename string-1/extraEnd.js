function extraEnd(str){
  let last2 = str.substring(str.length, str.length -2);
  let newStr = last2 + last2 + last2;
  return newStr;
}