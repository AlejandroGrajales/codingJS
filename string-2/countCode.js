function countCode(str){
  let count = 0;
  for(i = 0; i < str.length; i++){
    if(str.substring(i, i + 2) === "co" && str.substring(i + 3, i + 4) === "e"){
      count ++;
    }
  }
  return count;
}