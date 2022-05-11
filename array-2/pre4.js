function pre4(nums){
  let newArr = [];
  for(i = 0; i < nums.length; i++){
    if(nums[i] === 4){
      return newArr;
    } else {
      newArr.push(nums[i]);
    }
  }
}