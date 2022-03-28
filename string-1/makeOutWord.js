function makeOutWord(out, word){
  let out1 = out.substring(0, 2);
  let out2 = out.substring(out.length, out.length - 2);
  return out1 + word + out2;
}