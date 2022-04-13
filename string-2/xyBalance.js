function xyBalance(str){
  let x = str.lastIndexOf("x");
  let y = str.lastIndexOf("y");
  if(!str.includes("x") && !str.includes("y")){
    return true;
  }
  return x < y ? true : false;
}