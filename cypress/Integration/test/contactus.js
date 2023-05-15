/// <reference types = "Cypress" />

import ContactPage from "../pages/contactus";   //import the Contact page class where locators from Contact page have been defined
const contact_data = require('../test-data/contactdetails') //reuire the test data fiel at run time


describe('Contact Page tests', function () {
   const contactpage = new ContactPage();

   before(function () {   // before the test start this hook will let all the cookies clear and launch the contact url
      cy.clearAllCookies
   })

   beforeEach(function () {
      cy.visit('/')
   })

   it('TC01 : To validate the navigation of contact URL', function () {
      cy.url().should('include', 'contact')
      cy.get('h1').contains('Contact').should('be.visible', 'true')
   })

   it('TC02: To verify the error message on incorrect format of email id.', function () {
      contactpage.fillFirstName(contact_data.firstname)
      contactpage.fillLastName(contact_data.lastname)
      contactpage.fillEmail('incorrrect@')
      contactpage.fillMobile(contact_data.mobile)
      contactpage.selectdropdown(contact_data.source)
      contactpage.fillMessage(contact_data.message)
      contactpage.clickSendMessage()
      cy.get('label').should('contain.text', 'Email must be formatted correctly.')
   })

   it('TC03: To verify the error message on invalid email id', function () {
      contactpage.fillFirstName(contact_data.firstname)
      contactpage.fillLastName(contact_data.lastname)
      contactpage.fillEmail(contact_data.invalidemail)
      contactpage.fillMobile(contact_data.mobile)
      contactpage.selectdropdown(contact_data.source)
      contactpage.fillMessage(contact_data.message)
      contactpage.clickSendMessage()
      cy.get('label').should('contain.text', 'Please enter a valid email address.')
   })

   it('TC04: To verify the error message on blank firstname or lastname', function () {
      contactpage.fillFirstName(' ')
      contactpage.fillLastName(contact_data.lastname)
      contactpage.fillEmail(contact_data.email)
      contactpage.fillMobile(contact_data.mobile)
      contactpage.selectdropdown(contact_data.source)
      contactpage.fillMessage(contact_data.message)
      contactpage.clickSendMessage()
      contactpage.getsinglefieldMsg()
      contactpage.getallfieldMsg()
   })

   it('TC05: To verify the error message on blank mobile number', function () {
      contactpage.fillFirstName(contact_data.firstname)
      contactpage.fillLastName(contact_data.lastname)
      contactpage.fillEmail(contact_data.email)
      contactpage.fillMobile(" ")
      contactpage.selectdropdown(contact_data.source)
      contactpage.fillMessage(contact_data.message)
      contactpage.clickSendMessage()
      contactpage.getsinglefieldMsg()
      contactpage.getallfieldMsg() 
   })

   it('TC06: To validate few drop down item selection and there visisbility', function () {
      contactpage.selectdropdown(contact_data.item1)
      contactpage.selectdropdown(contact_data.item2)
      contactpage.selectdropdown(contact_data.item3)
   })

   it('TC07: To validate the confirmation message with valid contact details.', function () {
      contactpage.fillFirstName(contact_data.firstname)
      contactpage.fillLastName(contact_data.lastname)
      contactpage.fillEmail(contact_data.email)
      contactpage.fillMobile(contact_data.mobile)
      contactpage.selectdropdown(contact_data.item3)
      contactpage.fillMessage(contact_data.message)
      contactpage.clickSendMessage() //clicking on Send Message button
      cy.HandleReCAPTCHA() // This is a custom  //this is to handle re-captcha but not working as 
      //unable to bypass as it seems to be production site.
      //QA may handshake with Dev in lower environment to disable the Google captcha service.
      contactpage.getConfirmMessage() //This is to verify the confirmation message after detailsubmitting.
   })

})
