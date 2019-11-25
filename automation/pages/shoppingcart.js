class shoppingcart {

get small() {return browser.react$('t', { label: "S" })}
get checkout() { return $("//div[contains(text(),'Checkout')]");}
get smallSizes() { return $$('//div[contains(text(), "Add to cart")]');}
get dropdown() { return $("div > select");}
get smallestItem() {return $('div:nth-child(2) > div.shelf-item__buy-btn');}

maximizeWindow() {
  browser.maximizeWindow();
}
clickSmallSize(){
  this.small.click();
}
selectSmallSizeItems() {
  browser.pause(1000);
  this.smallSizes.map(selectedElement=>selectedElement.click());
}

clickCheckout(){
  this.checkout.click();
}
acceptAlert(){
  browser.acceptAlert();
}

setLowesttoHighest(){
  this.dropdown.selectByVisibleText("Lowest to highest");
}
addLowestPricedTshirt(){
  browser.pause(1000);
  this.smallestItem.click();
}
}
module.exports = new shoppingcart();
