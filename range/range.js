function range(start, end) {
  var numbers=[];
  for(i=start;i<end;i++){
    numbers.push(i);
  }
  //console.log(numbers);
  return numbers
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []