const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I open {string}", function(page) {
  browser.url(page);
});

When("I select all small T-shirts", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.clickSmallSize();
  shoppingcart.selectSmallSizeItems();
  shoppingcart.clickCheckout();

});

Then("I should checkout successfully",function(){
  shoppingcart.acceptAlert();
})




