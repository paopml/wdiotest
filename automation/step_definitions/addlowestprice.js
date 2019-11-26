const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I launch url", function() {
  browser.url("https://react-shopping-cart-67954.firebaseapp.com/");
});

When("I add the lowest price item", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.setLowesttoHighest();
  shoppingcart.addLowestPricedTshirt();
});

Then("I should checkout successfully",function(){
  shoppingcart.clickCheckout();
})




