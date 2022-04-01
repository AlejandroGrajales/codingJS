function lastTwo(str){
  let a = str.substring(str.length - 2, str.length - 1);
  let b = str.substring(str.length - 1);
  if(str.length >= 2){
    return str.substring(0, str.length - 2) + b + a;
  }
  return str
}