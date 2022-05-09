function zipZap(str){
  let newArr = str.split("");
  let result = "";
  for(i = 0; i < newArr.length; i++){
    if(newArr[i] === "z" && newArr[i + 2] === "p"){
      newArr.splice(i + 1, 1);
    }
  }
  return newArr.join("");
}