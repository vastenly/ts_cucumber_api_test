@http_api @cookies
Feature: Using cookies

  @win
  Scenario Outline: Get postman-echo with cookie
    Given I'm create a get request for 'cookies/set?' api
    When I'm add query string to the request
      | key            | value            |
      | encryptionType | <encryptionType> |
    And I'm execute the api
    Then I'm should get the response with status <statusCode>
    And I'm save the cookies params from the response
    When I'm create a get request for 'cookies' api
    And I'm execute the api
    Then I'm should get the response with status <statusCode>
    And I'm verify the cookies params are the same
    When I'm create a get request for 'cookies/delete?' api
    And I'm execute the api
    Then I'm should get the response with status <statusCode>

    Examples:
      | encryptionType | statusCode |
      | None           | 200        |




    #When I GET https://twitter.com/
    #Then response status should be ok
    #And response should have a guest_id cookie
    #And response guest_id cookie should be secure
    #And response guest_id cookie should not be http only


