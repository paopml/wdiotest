Feature: Checkout small itemes in shopping React website

  Feature Description

  Scenario: I open above website and I add all the Small T-Shirts to my cart. Then, I checkout.
    Given I open "https://react-shopping-cart-67954.firebaseapp.com/"
    When I select all small T-shirts
    Then I should checkout successfully