Feature: Checkout lowest price in shopping React website

  Feature Description

  Scenario: I add the lowest price T-Shirt to my cart. Then, I checkout.
    Given I launch url
    When I add the lowest price item
    Then I should checkout successfully