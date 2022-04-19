function only14(nums){
  for(i = 0; i < nums.length; i++) {
    var indice = nums[i];
    if(indice !== 1 && indice !== 4){
      return false;
    }
  }
  return true;
}