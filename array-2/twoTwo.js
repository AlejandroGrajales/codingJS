function twoTwo(nums){
  let result = true;
  for(i = 0; i < nums.length; i++){
    if(nums[i] === 2){
      if(nums[i - 1] !== 2 && nums[i + 1] !== 2){
        result = false;
      } else {
        result = true;
      }
    } 
  }
  return result;
}