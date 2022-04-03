function countHi(str){
  let countHi = 0;
  for(i = 0; i < str.length; i++){
    if(str.substring(i, i + 2) === "hi"){
      countHi += 1;
    }
  }
  return countHi;
}