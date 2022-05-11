function post4(nums){
  for(i = nums.length; i >= 0; i -= 1){
    if(nums[i] === 4){
      return nums.slice(i + 1);
    }
  }
}