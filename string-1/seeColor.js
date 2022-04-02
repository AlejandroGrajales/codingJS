function seeColor(str){
  if(str.substring(0, 3) === "red") {
    return "red";
  }
  else if(str.substring(0, 4) === "blue"){
    return "blue";
  }
  return "";
}