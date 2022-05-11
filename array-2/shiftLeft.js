function shiftLeft(nums){
  if(nums.length < 1){
    return [];
  }
  let n = nums.shift()
  nums.push(n);
  return nums
}