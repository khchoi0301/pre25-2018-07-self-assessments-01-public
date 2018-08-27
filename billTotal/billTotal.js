function billTotal(subtotal) {
  return subtotal*1.15+subtotal*0.095
}

billTotal(10.00); // => 12.45