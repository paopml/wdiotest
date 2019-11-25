const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I open url", function(page) {
  browser.url(page);
});

When("I select all small T-shirts", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.pause();
  shoppingcart.clickSmallSize();
  shoppingcart.pause();
  shoppingcart.selectSmallSizeItems();
  shoppingcart.clickCheckout();
  shoppingcart.pause();
});

Then("I should checkout successfully",function(){
  shoppingcart.acceptAlert();
})




