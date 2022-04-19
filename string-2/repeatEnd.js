function repeatEnd(str, n){
  let newArr = [];
  let newStr = str.substring(str.length - n);
  const func = (uno) => {
    if(newArr.length === n){
      return
    }
    if(newArr.length !== n){
      newArr.push(newStr);
    }
    func(uno);
  }
  func(newStr);
  return newArr.join("");
}