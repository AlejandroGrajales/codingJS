function start1(a, b){
  let num1 = 0;
  if(a[0] === 1 && b[0] === 1) {
    num1 = 2;
  }
  else if(a[0] === 1 || b[0] === 1) {
    num1 = 1;
  }
  return num1;
} 