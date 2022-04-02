function deFront(str){
  if(str[0] === "a" && str[1] === "b"){
    return str
  }
  else if(str[0] === "a") {
    return "a" + str.substring(2);
  }
  else if(str[1] === "b"){
    return str.substring(1);
  }
  return str.substring(2);
}