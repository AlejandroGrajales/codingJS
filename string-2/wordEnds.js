function wordEnds(str, word){
  let result = "";
  if(str.length <= word.length){
    return "";
  }
  for(i = 0; i < str.length; i++){
    if(str.substr(i, word.length) === word){
      if(!str[i - 1]){
        result += str[i + word.length];
      }
      else if(!str[i + word.length]){
        result += str[i - 1];
      } else {
        result += str[i - 1] + str[i + word.length];
      }
    }
  }
  return result;
}