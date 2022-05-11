function zeroMax(nums){
  var impar = 0;
  for(i = nums.length - 1; i >= 0; i -= 1){
    if(nums[i] % 2 !== 0 && nums[i] > impar){
      impar = nums[i]
      continue;
    }
    if(nums[i] === 0){
      nums[i] = impar;
    }
  }
  return nums;
}