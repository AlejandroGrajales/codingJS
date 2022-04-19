function prependSum(nums){
  nums[1] += nums[0];
  nums.shift();
  return nums;
}