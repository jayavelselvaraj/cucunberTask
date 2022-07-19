#Author:jayavels2@your.domain.com
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
@tag
Feature: Tv Purchase
  I want to use this template for my feature file

  @tag1
  Scenario: Tv
    Given user launches flipkart application
    And user login into flipkart
    When user search tv
    And user choose the tv and doing payments
    Then user receive order confirmation message

  Scenario: one dimensional list
    Given user launches flipkart application
    And user login into flipkart
    When user search tv  by using one dimensional list
      | samsungtv | haiertv | lgtv |
    And user choose the tv and doing payments
    Then user receive order confirmation message

  Scenario: one dimensional map
    Given user launches flipkart application
    And user login into flipkart
    When user search tv  by using one dimensional map
      | tv1 | samsungtv |
      | tv2 | haiertv  |
      | tv3 | lgtv     |
    And user choose the tv and doing payments
    Then user receive order confirmation message
    
Scenario Outline: All Tvs
    Given user launches flipkart application
    And user login into flipkart
    When user search tv "<Telivisions>"
    And user choose the tv and doing payments
    Then user receive order confirmation message
   
   Examples:
   |Telivisions|
   |Samsungtv|
   |haiertv|
   |lgtv|