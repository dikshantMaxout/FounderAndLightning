import { should } from "chai"

class ContactPage {

    fillFirstName(firstname) {
        cy.get('input[id*=firstname]').type(firstname, { force: true })
    }

    fillLastName(lastname) {
        cy.get('input[id*=lastname]').type(lastname, { force: true })
    }

    fillEmail(email) {
        cy.get('input[id*=email]').type(email, { force: true })
    }

    fillMobile(mobile) {
        cy.get('input[id*=mobilephone]').type(mobile, { force: true })
    }

    fillMessage(msg) {
        cy.get('textarea[id*=message]').type(msg, { force: true })
    }

    selectdropdown(val) {
        cy.get('select[id*=about_us]').select(val, { force: true }), should('eq', val)
    }

    clickSendMessage() {
        cy.get('input[type=submit]').click({ force: true })
    }

    getConfirmMessage() {
        cy.contains("Thank you for your message. We'll get back to you as soon as possible.")
    }

    getsinglefieldMsg() {
        cy.get('label').should('contain.text', 'Please complete this required field.')
    }

    getallfieldMsg() {
        cy.get('label').should('contain.text', 'Please complete all required fields.')
    }

}

export default ContactPage;