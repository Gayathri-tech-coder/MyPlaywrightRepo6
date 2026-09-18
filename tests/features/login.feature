Feature: Login Functionality
Scenario: Test Valid Login
    Given user enters url
    When user enters username
    And user enters password
    And clicks login button
    Then login must be success