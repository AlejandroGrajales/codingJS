function getSandwich(str){
  let newStr = "";
  let pan = str.indexOf("bread")
  let pan2 = str.lastIndexOf("bread")
  if (pan === -1 || pan === pan2) {
    return newStr;
  }
  newStr = str.slice(pan + 5, pan2)
  return newStr;
}