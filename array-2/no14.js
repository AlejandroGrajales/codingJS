function no14(nums){
  var acumuladoraUno = 0;
  var acumuladoraDos = 0;
  for(i = 0; i < nums.length; i++) {
    if(nums[i] == 1) {
      acumuladoraUno++;
    }
    if(nums[i] == 4) {
      acumuladoraDos++;
    }
  }
  if(acumuladoraUno >= 1 && acumuladoraDos >= 1) {
    return false;
  }
  return true;
}