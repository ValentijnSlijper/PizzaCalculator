//SmallPizza
var amountSmall = parseInt(prompt("Hoeveel kleine pizza's wilt u bestellen?"));

if (isNaN(amountSmall)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountSmall = parseInt(prompt("Hoeveel kleine pizza's wilt u bestellen?"));
}
if (isNaN(amountSmall)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountSmall = parseInt(prompt("Hoeveel kleine pizza's wilt u bestellen?"));
}


//MediumPizza
var amountMedium = parseInt(prompt("Hoeveel medium pizza's wilt u bestellen?"));

if (isNaN(amountMedium)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountMedium = parseInt(prompt("Hoeveel medium pizza's wilt u bestellen?"));
}

if (isNaN(amountMedium)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountMedium = parseInt(prompt("Hoeveel medium pizza's wilt u bestellen?"));
}

//LargePizza
var amountLarge = parseInt(prompt("Hoeveel grote pizza's wilt u bestellen?"));

if (isNaN(amountLarge)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountLarge = parseInt(prompt("Hoeveel grote pizza's wilt u bestellen?"));
}
if (isNaN(amountLarge)){
  alert("U Heeft geen nummer ingevoerd!");
  var amountLarge = parseInt(prompt("Hoeveel grote pizza's wilt u bestellen?"));
}

//Prices
const priceSmall = 3.95;
const	priceMedium = 5.95;
const priceLarge = 7.95;

//Summs
var priceS= (amountSmall*priceSmall);
var priceM= (amountMedium*priceMedium);
var priceL= (amountLarge*priceLarge);




var priceTotal = (priceS+priceM+priceL)
priceTotal = +priceTotal.toFixed(2);
document.write ("<br>"+"<br>");
document.write ("Het Totaal bedrag is:"+" ")
document.write ("€"+" ")
document.write (priceTotal)
document.write ("<br>"+"Bedankt voor uw bestelling!")
