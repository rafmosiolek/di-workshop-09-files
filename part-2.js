var fs = require('fs');

var fileContents = fs.readFileSync('shopping-basket.json', 'utf-8');
var data = JSON.parse(fileContents);
console.log(data);

var totalPrice = 0;

for (var item of data.basket) {
    if (item.name === 'Candles') {
        item.quantity = 10;
        console.log(item.quantity);
        var jsonString = JSON.stringify(data, null, 2)
        fs.writeFileSync('new-shopping-basket.json', jsonString, 'UTF-8');
    }
    totalPrice +=item.price;
  }

console.log('the total basket price is: ' + totalPrice);