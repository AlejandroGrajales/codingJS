function sum67(nums){
  let sum = 0;
  for(i = 0; i < nums.length; i++){
    if(nums[i] === 6){
      while(nums[i] != 7){
        i++
      }
    }
    else{
      sum += nums[i];
    }
  }
  return sum;
}