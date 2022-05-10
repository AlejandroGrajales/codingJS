function tripleUp(nums){
  for(i = 0; i < nums.length; i++){
    if(nums[i] === nums[i + 1] - 1 && 
       nums[i] === nums[i + 2] - 2){
      return true;
    }
  }
  return false;
}