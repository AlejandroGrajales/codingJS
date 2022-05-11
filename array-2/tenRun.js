function tenRun(nums){
  var diez = 0;
  for(i = 0; i < nums.length; i++) {
   if(nums[i] % 10 === 0) {
     diez = nums[i];
   }
   else if(nums[i - 1] % 10 !== 0) {
     nums[i] = nums[i];
   }
   else if(nums[i] % 10 !== 0) {
     nums[i] = diez;
   }
  }
  return nums;
}