function withoutTen(nums){
  let newArr = [];
  for(i = nums.length - 1; i >= 0; i -= 1){
    if(nums[i] === 10){
      nums[i] = 0;
      newArr.push(nums[i])
    } else{
      newArr.unshift(nums[i])
    }
  }
  return newArr;
}