function has12(nums){
  let uno = false;
  let dos = false;
  for(i = 0; i < nums.length; i++){
    if(nums[i] === 1){
      uno = true;
      }
    if(nums[i] === 2 && uno){
      return true;
    }
  }
  return false;
}