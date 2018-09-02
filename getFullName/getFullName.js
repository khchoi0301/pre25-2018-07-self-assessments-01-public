function getFullName(obj) {
  var fullname=[];
  for(var key in obj.name){
    fullname.push(obj.name[key])
  }
  return fullname.join(' ');
}

var person = {
  name : {
    first : "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age : 26
};
getFullName(person); //"Alyssa P. Hacker"

var personB = {
  name: {
    first: "Ben",
    last: "Bitdiddle"
  },
  age: 34
};
getFullName(personB); //"Ben Bitdiddle"