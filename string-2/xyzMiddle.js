function xyzMiddle(str){
  let n = parseInt(str.length / 2);
  if(str.length < 3){
    return false;
  }
  if(str.length % 2 === 1){
    if(str[n - 1] === "x" &&
      str[n] === "y" &&
      str[n + 1] === "z"){
      return true;
    } else {
      return false;
    }
  } else {
    if(str[n - 1] === "x" &&
      str[n] === "y" &&
      str[n + 1] === "z"){
      return true;
    }
    else if(str[n - 2] === "x" &&
      str[n - 1] === "y" &&
      str[n] === "z"){
      return true;
    }
    else if(str[n] === "x" &&
      str[n + 1] === "y" &&
      str[n + 2] === "z"){
      return true;
    } else {
      return false;
    }
  }
}