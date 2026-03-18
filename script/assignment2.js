let priceTag;
//Enter the input from user with dollar symbol
pricetag= prompt(`Enter the price tag with $symbol:`);
//remove dollar sign from price
newPriceTag= pricetag.replace("$","");
console.log(`the price without dollar sign ${newPriceTag}`);
let price=parseFloat(newPriceTag);
//reduce the price by 10%
let discountedPrice=price*((100-10)/100);
//to display the discounted price on browser
document.getElementById("demo").innerHTML = discountedPrice;
//to display the discounted price on console with two precisions
console.log(`Your new price is ${discountedPrice.toFixed(2)}`);
