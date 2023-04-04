# CypressAutomation
Sample cypress automation project

1) Pre requisite - 
User system should have following setup 
Node JS version 14+ should be installed
npm should be installed for easy installation of different packages if required
Cypress latest version should be installed
Test link should be up and running 
Docker should be installed globally 
Git should be installed to get this repository on local system


2) Execution of Script -
User need to run below command for running script in docker image 
$ docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0
Note - docker image version and cypress/included version can be environment specific as per setup



