function comboString(a, b){
  let newString;
  if(a.length < b.length) {
    newString = a + b + a;
    return newString;
  } else {
    newString = b + a + b;
    return newString;
  }
}