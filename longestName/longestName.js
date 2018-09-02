var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var nameLength=[]
  var maxLength=0;
  var longestNameStr;
  
  for(i=0;i<people.length;i++){
    var name='';
    for(var key in people[i].name){
      name+=people[i].name[key]+' ';
    }    
    if(maxLength<name.length){
      maxLength=name.length;
      longestNameStr=name;
    }
  }
  //console.log(longestNameStr,maxLength)
  return longestNameStr
}

longestName(people); //"Alyssa P. Hacker"