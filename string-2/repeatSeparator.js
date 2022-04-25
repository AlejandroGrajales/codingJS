function repeatSeparator(word, sep, count){
  let newStr = "";
  for(i = 0; i < count; i++){
    if(i === count - 1){
      newStr += word;
    } else {
      newStr += word + sep;
    }
  }
  return newStr;
}