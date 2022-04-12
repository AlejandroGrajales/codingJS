function xyzThere(str){
  for(i = 0; i < str.length - 2; i++){
    if(str[i - 1] !== "." && str.substring(i, i + 3) === "xyz"){
      return true;
    }
  }
  return false;
}