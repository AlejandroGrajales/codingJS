function makeLast(nums){
  let newArray = new Array(nums.length * 2);
  newArray.fill(0);
  newArray[newArray.length - 1] = nums[nums.length - 1];
  return newArray;
}