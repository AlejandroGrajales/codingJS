function has22(nums){
  for(i = 0; i < nums.length; i++){
    if(nums[i + 1] === 2 && nums[i] === 2){
      return true;
    }
  }
  return false;
}