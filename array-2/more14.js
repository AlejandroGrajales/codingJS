function more14(nums){
  let uno = 0;
  let cuatro = 0;
  let i = 0;
  while(i < nums.length){
    switch(nums[i]){
      case 4 :
        cuatro++;
        break;
      case 1 :
        uno++;
        break;
    }
    i++;
  }
  return uno > cuatro;
}