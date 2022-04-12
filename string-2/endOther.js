function endOther(a, b){
  let newA = a.toLowerCase();
  let newB = b.toLowerCase();
  return newA.endsWith(newB) || newB.endsWith(newA) ? true : false;
}