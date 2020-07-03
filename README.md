# _Currency Exchange_

#### _Application will take in an amount in USD and return amount in other currencies_

#### By _**Ben Russell**_

## Description

_User will be able to enter an amount in USD and get a return of the amount in a chosen other currency._

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| 1. The program will hold a user input in an object. | 10 USD | |
| 2. The program will send a GET request to exchange rate API | 10 USD | 1075.17 Yen |
| 3. If API call results in an error the application will return a notification stating the error | 10 USD | Error: 404 |
| 4. Program will display results to user | 10 USD | 1075.17 Yen |

## Setup/Installation Requirements

* _Visit the following link: https://github.com/brussell36/currency-exchanger_
* _Clone the repository to your desired directory._
* _Open in VS Code or text editor of choice._
* _Run npm install to get all dependencies._
* _Next npm run build to create a bundle.js in your dist folder._
* _Finally npm run start to launch live server to view completed site._
* _User will have to generate their own API Key from https://www.exchangerate-api.com/_
* _Navigate to their homepage and enter your email in the field next to Get Free Key button._
* _Then enter your first name and password and make sure to check the box agreeing to their terms of service_
* _Create a .env file on your local machine and create an API_KEY = [Your_Private_API_KEY]._
* _User will have to copy and paste their key from the dashboard of https://www.exchangerate-api.com/ into the [Your_Private_API_KEY]._
* _You may have to run npm run build again for everything to work together properly._

## Known Bugs

_ _
## Support and contact details

_Contact me at benjaminrussell36@gmail.com_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _Webpack_
* _jQuery_
* _NPM_

### License

*GPL license distribution*

Copyright (c) 2020 **_Ben Russell_**
