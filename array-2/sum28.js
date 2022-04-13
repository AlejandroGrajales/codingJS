function sum28(nums){
  let acumuladora = 0;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] === 2) {
      acumuladora += nums[i];
      }
    }
   if(acumuladora === 8) {
       return true;
    }
  return false;
}