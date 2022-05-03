function either24(nums){
  var dos = false;
  var cuatro = false;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] === 2 && nums[i + 1] === 2) {
      dos = true;
    }
    if(nums[i] === 4 && nums[i + 1] === 4) {
      cuatro = true;
    }
  }
  if(dos === true && cuatro === true) {
    return false;
  }
  else if(dos === true || cuatro === true) {
    return true;
  }
  return false;
}