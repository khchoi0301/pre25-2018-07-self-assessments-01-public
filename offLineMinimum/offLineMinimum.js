function offLineMinimum(strArr) {
  var subset=[];
  var testArr=strArr;
  (function iter(testArr){
    for(var i=0;i<testArr.length;i++){
      if(testArr[i]==='E'){        
        testArr.splice(i,1);
        testArr.splice(minimum(testArr,i),1);
        iter(testArr);
      } 
    }
  })(testArr)   

  return subset.join(',');

  function minimum(testArr,num){
    var minNum=testArr[0];
    var minNumpos=0;  
  
    for(i=0;i<num;i++){
      if(minNum>testArr[i]){
        minNum=testArr[i];
        minNumpos=i;
      }    
    } 
    subset.push(Number(minNum));
    return minNumpos; 
  }
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'

//offLineMinimum(["4","3","1","2","E","E","3","E"]); // => '1,2,3'

//offLineMinimum(["4","E","1","2","E","E","3","E"]); // => '4,1,2,3'


//offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'
//offLineMinimum(["3","E","21","E","1","2","E","E"]); // 3,21,1,2