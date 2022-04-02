function withoutX2(str){
  if(str[0] === "x" && str[1] === "x"){
      return str.substring(2);
  }
  else if(str[0] === "x"){
    return str.slice(1);
  }
  else if(str[1] === "x"){
    return str.substring(0, 1) + str.substring(2);
  }
  return str;
}