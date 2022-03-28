function maxEnd3(nums){
  let largerNum = 0;
  if(nums[0] >= nums[nums.length - 1]) {
    largerNum = nums[0];
  } else {
    largerNum = nums[nums.length - 1];
  }
  for(i = 0; i < nums.length; i++) {
    nums[i] = largerNum;
  }
  return nums;
}