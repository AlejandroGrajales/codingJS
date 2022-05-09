function starOut(str){
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === "*") {
      continue;
    } else if (str[i - 1] === "*") {
      continue;
    } else if (str[i] === "*") {
      continue;
    } else {
      result += str[i];
    }
  }
  return result;
}