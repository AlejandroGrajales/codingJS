function haveThree(nums){
  var contador = 0;
  var tres = false;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] === 3) {
    contador++;
    }
    if(nums[i] === 3 && nums[i + 1] === 3) {
      tres = true;
    }
  }
  if(contador === 3 && !tres) {
    return true;
  }
  return false;
}