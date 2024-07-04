@saucedemo @demo
Feature: Saucedemo login

    Background:
        Given user is on Saucedemo login page
        And user input password with "secret_sauce"

    @TC-5 @TC-6 @TC-7 @TC-8 @standard @visual @problem_user @performance_glitch_user 
    Scenario Outline: Successful login
        Given user is on Saucedemo login page
        And user input username with "<username>"
        When user click login button
        Then user should redirect to the homepage

    Examples:
      | username                |
      | standard_user           |
      | visual_user             |
      | problem_user            |
      | performance_glitch_user |
