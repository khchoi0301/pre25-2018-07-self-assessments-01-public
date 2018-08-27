function getFullName(obj) {
  name="";
  for(var key in obj.name){
    name+=obj.name[key]+' '
  }
  return name;
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