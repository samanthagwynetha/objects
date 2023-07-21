function isSameProduct(product1, product2) {
  if (product1 === product2) {
    return true;
  }
  else {
    return false;
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

console.log(isSameProduct(product1,product2))
