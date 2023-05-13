**Test cases related to Contact US page are written in ContactUs_TestCases.md**

**Integration/pages/contactus.js**
Page class for contactus where locators and functions are defined in order to make it more usable and easy to maintain.

**Integration/test/contactus.js**  
Automated test scripts for contactus test cases are placed here.

**Integration/test-data/contactdetails.js** 
Test data file where contact details are getting fetched at run time

baseUrl defined in config.js 

**To execute Cypress UI automated Test**
1. git clone the project to any folder
2. Make sure after cloning , open : cloned folder > FounderAndLightning > Open
3. npm install 
4. npm test -- Defined in package.json to run the spec file on chrome

***No external reports integrated as of now**

**To execute Postman API automated Test**
1. Download Postman collection : FAL_Assignment.postman_collection.json  
2. Import and run the collection
3. It coveres  : Getallobjects with Test,Getobject with specific ids and Getobject with concatinating ids
