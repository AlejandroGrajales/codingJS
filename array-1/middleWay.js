function middleWay(a, b){
  let newArray = [];
  newArray.push(a[(a.length - 1) / 2]);
  newArray.push(b[(b.length - 1) / 2]);
  return newArray;
}
 // respuesta b
function middleWay(a, b){
  let newArray = [a[1], b[1]];
  return newArray;
}