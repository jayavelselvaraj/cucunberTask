#Author: jayavels2@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Mobile Purchase
  I want to use this template for my feature file

    Scenario Outline: All Mobiles
    Given user launches flipkart application
    And user login into flipkart
    When user search mobile "<phones>"
    And user choose the mobile and doing payments
    Then user receive order confirmation message
    
    Examples:
    |phones|
    |oneplus|  
      |realme|  
       |redmi|  