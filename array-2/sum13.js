function sum13(nums){
  let sum = 0;
  
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] != 13) {
      sum += nums[i]
    } 
    else{
      i += 1
    }
  }
  return sum;
}