function countEvens(nums){
  let pares = 0;
  for(i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      pares += 1;
    }
  }
  return pares;
}