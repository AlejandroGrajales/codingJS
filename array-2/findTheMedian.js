let nums = [4,9,9,2,1,5];

function findTheMedian(nums){
  let mid = parseInt((nums.length - 1) / 2);
  if(nums.length % 2 === 1){
    return nums[mid];
  } 
  let result = (nums[mid] + nums[mid + 1]) / 2;
  return result;
}

console.log(findTheMedian(nums));