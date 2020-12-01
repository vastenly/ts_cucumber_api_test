# ts_cucumber_api_test
Test api project with typescript cucumber and chai


## How to Run

### Steps

- `npm install`

- Run tests with
 `npm test`
or (without build)
 `npm run cucumber`




The goal of the project is to solve the task below:

Create API Test Automation Framework using TypeScript and GOT or Chai packages.

Description

You are Quality assurance Engineer starting a new project and You are asked to create an BDD automation framework in NodeJS using TypeScript, Cucumber and GOT or Chai packages.

To ensure, that framework is functional, You are asked to set up the framework and automate one test case in this framework.

Test case:

Name: Set cookies in Postman Echo Service and get same cookies back and delete one of the cookies.

Steps:

1. Make a GET call at “/cookies/set?” with at least three cookies as Params

2. Expect to see Your provided cookies in the response body

3. Make a second GET call at “/cookies”

4. Expect to see cookies which were previously set in the response body

5. Make a GET call at “/cookies/delete?” with one param of for one of the cookies to be deleted

6. Expect not to see deleted cookie in response body, just to remaining two

Note: If you are getting no cookies back, that’s because you need specific rules to get them in NodeJS read more regarding cookies in GOT Documentation (https://www.npmjs.com/package/got) or the respective Chai HTTP library (https://www.chaijs.com/) you are using.

Task deliverables:

• Link to GitHub repository with provided setup instruction in README.md.

• Repository must contain automation framework with one test case automated with a BDD annotation for the test case.

• We must be able to run the tests by typing in “npm run test” in the console.,

• Optional: Write additional two test cases for Postman echo services of Your choice.

Postman documentation: https://docs.postman-echo.com/?version=latest
