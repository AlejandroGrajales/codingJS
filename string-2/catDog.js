function catDog(str){
  let countCat = 0;
  let countDog = 0;

  for(let i = 0; i < str.length; i++){
    let check = str.substring(i, i + 3);
    if(check === "dog"){
      countDog ++;
    }
    else if(check === "cat"){
      countCat ++;
    }
  }
  return countDog === countCat;
}