function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  }
  else {
    return product2;
  }
}

const product1 = {
  Name: 'basketball',
  Price: 2095,
  ['delivery-time']: '3 days'
};

const product2 = {
  Name: 'ballpen',
  Price: 20,
  ['delivery-time']: '3 days'
};

console.log(comparePrice(product1,product2))
