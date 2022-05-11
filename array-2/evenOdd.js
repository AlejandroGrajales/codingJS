function evenOdd(nums){
  let newArr = [];
  for(i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      newArr.unshift(nums[i])
    } else {
      newArr.push(nums[i])
    }
  }
  return newArr;
}