function frontAgain(str){
  if(str.length <= 1) {
    return false;
  }
  else if(str.substring(0, 2) === str.substring(str.length - 2)){
    return true;
  }
  return false;
}