function sameStarChar(str){
  let star = str.split("");
  if(str.length < 3){
    return true;
  }
  for(i = 1; i < star.length - 1; i++){
    if(star[i] === "*" && star[i - 1] !== star[i + 1]){
      return false;
    }
    else if(star[i] === "*" && star[i - 1] === star[i + 1]){
      continue;
    }
  }
  return true;
}