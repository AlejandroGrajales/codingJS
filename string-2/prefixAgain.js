function prefixAgain(str, n){
  let str1 = str.slice(0, n);
  let str2 = str.slice(n);
  if(str2.indexOf(str1) > -1){
    return true;
  }
  return false;
}