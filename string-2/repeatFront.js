function repeatFront(str, n){
  let newStr = "";
  let count = n;
  for(i = 0; i < n; i++){
    let push = str.slice(0, count);
    newStr += push;
    count -= 1;
  }
  return newStr;
}