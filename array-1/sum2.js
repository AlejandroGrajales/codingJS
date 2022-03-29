function sum2(nums){
  let sum = 0;
  if(nums.length === 0) {
    return sum;
  } 
  else if(nums.length === 1) {
    sum = nums[0];
    return sum;
  } else {
    sum = nums[0] + nums[1];
    return sum;
  }
}