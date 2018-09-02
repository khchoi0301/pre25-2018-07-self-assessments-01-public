var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  var maxLength=0;
  var longestNameStr;
  
  for(i=0;i<people.length;i++){
    var name=[];
    var fullName;
    for(var key in people[i].name){
      name.push(people[i].name[key]);
      fullName=name.join(' ');
    }    
    if(maxLength<name.length){
      maxLength=fullName.length;
      longestNameStr=fullName;
    }
  }

  return longestNameStr
}

longestName(people); //"Alyssa P. Hacker"