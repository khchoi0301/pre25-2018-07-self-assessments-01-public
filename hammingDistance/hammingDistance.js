function hammingDistance(strArr) {
  var arr1=strArr[0].split('');
  var arr2=strArr[1].split('');
  var difAlph=0;
  console.log(arr1,arr2);
  for(i=0;i<arr1.length;i++){
    if(arr1[i]!==arr2[i]){
      difAlph++;
    }
  }
  //console.log(difAlph);
  return difAlph
}

hammingDistance(["coder", "codec"]); // => 1
hammingDistance(["10011", "10100"]); // => 3
hammingDistance(["helloworld", "worldhello"]); // => 8
