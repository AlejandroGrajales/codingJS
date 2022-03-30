function biggerTwo(a, b){
  if(a[0] + a[1] === b[0] + b[1]) {
    return a;
  } 
  else if (a[0] + a[1] < b[0] + b[1]) {
    return b;
  }
  return a;
}