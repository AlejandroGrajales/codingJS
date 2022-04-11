function sum67(nums){
  let sum = 0;
  for(i = 0; i < nums.length; i++){
    if(nums[i] === 6){
      while(nums[i] != 7){
        i++
      }
    }
    else{
      sum += nums[i];
    }
  }
  return sum;
}

// respuesta 2

function sum67(nums){
  let stop = false;
  let sum = 0;
  for(let i of nums){
    if(i === 6){
      stop = true;
    }
    if(!stop){
      sum += i;
    }
    if(stop && i === 7){
      stop = false;
    }
  }
  return sum;
}