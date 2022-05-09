function plusOut(str, word){
  let result = "";
  for(i = 0; i < str.length; i++){
    if(str.substr(i, word.length) === word){
      result += str.substr(i, word.length);
      i += word.length - 1;
    }
    else if(str.substr(i, word.length) !== word){
      result += "+";
    }
  }
  return result;
}