function rotateLeft3(nums){
  let lastNum = nums.splice(0, 1);
  nums.push(lastNum[0]);
  return nums;
}