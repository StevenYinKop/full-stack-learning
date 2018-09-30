function * getStockProce(stock) {
  while(true) {
    yield Math.random() * 100;
  }
}

var priceGenerator = getStockProce('IBM');

var limitPrice = 15;

var price = 100;

while(price > limitPrice) {
  price = priceGenerator.next().value;
  console.log(`the generator return ${price}.`);
}

console.log(`buying at ${price}`)