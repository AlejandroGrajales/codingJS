function notAlone(nums, val){
  for(i = 1; i < nums.length - 1; i++){
    if(nums[i] === val){
      if(nums[i + 1] < nums[i - 1]){
        nums[i] = nums[i - 1];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return nums;
}