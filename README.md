# CypressAutomation
Sample cypress automation project

1) Pre requisite - 
  User system should have following setup - 
   1) Node JS version 14+ should be installed
   2) npm should be installed for easy installation of different packages if required
   3) Cypress latest version should be installed
   4) Test link should be up and running 
   5) Docker should be installed globally 
   6) Git should be installed to get this repository on local system


2) Execution of Script -
User need to run below command for running script in docker image 
**$ docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0**
Note - docker image version and cypress/included version can be environment specific as per setup

3) Scenarios - 

Feature: As a website user verify Login Functionality	

  Scenario:As a valid user Login into the application with valid credentials and logout
    Given I am on the Login page URL "http://wave-trial.getbynder.com/"
    When I Enter Username in Username Textbox as <username>
    When I Input Password in Password Textbox as <Password>
    And  click on login button
    Then I should be logged in successfully
    And  landed on Dashboard page
    Then I click on Profile button
    And  I Click on Log out
    Then I got log out from the application and land on login page


 Scenario:As a invalid user Login into the application should give me error message
    Given I am on the Login page URL "http://wave-trial.getbynder.com/"
    When I Enter Username in Username Textbox as <username>
    When I Input Password in Password Textbox as <Password>
    And  click on login button
    Then I should get error message
    And  I should get error notification
    Then I should be on Login page

 



