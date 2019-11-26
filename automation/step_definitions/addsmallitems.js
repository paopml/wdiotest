const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I open url", function() {
  browser.url("https://react-shopping-cart-67954.firebaseapp.com/");
});

When("I select all small T-shirts", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.clickSmallSize();
  shoppingcart.selectSmallSizeItems();
});

Then("I should checkout fine",function(){
  shoppingcart.clickCheckout();
})




