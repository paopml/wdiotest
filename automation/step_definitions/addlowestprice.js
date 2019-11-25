const { Given, When, Then } = require("cucumber");
const assert = require("assert");
const shoppingcart = require("../pages/shoppingcart.js");

Given("I open {string}", function(page) {
  browser.url(page);
});

When("I add the lowest price item", function(){
  shoppingcart.maximizeWindow();
  shoppingcart.setLowesttoHighest();
  shoppingcart.addLowestPricedTshirt();
  shoppingcart.clickCheckout();
});

Then("I should checkout successfully",function(){
  shoppingcart.acceptAlert();
})




