function sum13(nums){
  let acumuladora = 0;
  
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] == 13) {
      return acumuladora;
    }
    acumuladora += nums[i];   
  }
  return acumuladora;
}