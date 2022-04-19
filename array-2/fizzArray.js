function fizzArray(n){
  let fizz = [0];
  for(i = 0; i < n; i++){
    let num = i;
    fizz.push(i + 1);
  }
  fizz.pop();
  return fizz;
}