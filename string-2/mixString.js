function mixString(a, b){
  let newArray = [];
  let arrA = a.split("");
  let arrB = b.split("");
  let count = arrA.length + arrB.length;
  const newFunc = (uno, dos) => {
    if(newArray.length === count){
      return;
    }
    if(arrA.length !== 0){
      newArray.push(uno.shift());
    }
    if(arrB.length !== 0){
      newArray.push(dos.shift());
    }
    newFunc(uno, dos);
  }
  newFunc(arrA, arrB);
  return newArray.join("");
}