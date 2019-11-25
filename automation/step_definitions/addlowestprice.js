const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I open {string}", function(page) {
  browser.url(page);
});

When("I add the lowest price item", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.pause();
  shoppingcart.setLowesttoHighest();
  shoppingcart.pause();
  shoppingcart.addLowestPricedTshirt();
  shoppingcart.pause();
  shoppingcart.clickCheckout();
  shoppingcart.pause();
});

Then("I should checkout successfully",function(){
  shoppingcart.acceptAlert();
})




