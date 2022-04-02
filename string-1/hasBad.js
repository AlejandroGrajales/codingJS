function hasBad(str){
  if(str.substring(0, 3) === "bad"){
    return true;
  }
 else if(str.substring(1, 4) === "bad"){
   return true;
 }
 return false;
}