function centeredAverage(nums){
  let newArray = nums.sort((a, b) => a - b);
  newArray.shift();
  newArray.pop();
  let cantidad = 0;
  for(i = 0; i < newArray.length; i++){
    cantidad += newArray[i];
  }
  return cantidad / newArray.length;
}