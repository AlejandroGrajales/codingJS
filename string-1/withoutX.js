function withoutX(str){
  
  if(str[0] === "x" && str[str.length - 1] === "x"){
    return str.slice(1, -1);
  }
  else if(str[0] === "x"){
    newStr = str.slice(1);
    return newStr;
  }
  else if(str[str.length - 1] === "x"){
    return str.slice(0, -1);
  }
  return str;
}