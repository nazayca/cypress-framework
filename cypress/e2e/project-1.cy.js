/// <reference types="cypress"/>
describe('validate elements on Contact Us page', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
    })

    it('Validate the heading is “Contact Us”', () => {
        cy.get('h1').should('contains.text', 'Contact Us')
    })

    it('Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”', () => {
        cy.get('#address').should('contains.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    })

    it('Validate the email is “info@techglobalschool.com"', () => {
        cy.get('[id="email"]').should('contains.text', 'info@techglobalschool.com')
    })

    it('Validate the phone number is “(773) 257-3010”', () => {
        cy.get('#phone-number').should('have.text', '(224) 580-2150')
    })

    it('Validate that the Full name input box is displayed and required', () => {
        cy.get('.input[placeholder="Enter your full name"]')
            .should('be.visible')
            .and('have.attr', 'required')

    })

    it('Validate that the label of the Full name input box is “Full name *', () => {
        cy.get('.label[for="name"]').should('have.text', 'Full name *')

    })

    it('Validate that the placeholder of the Full name input box is “Enter your full name”', () => {
        cy.get('.input[placeholder="Enter your full name"]').should('have.attr', 'placeholder', 'Enter your full name')
    })

    it('Validate the label is “Gender *”', () => {
        cy.get('.control>.label').should('have.text', 'Gender *')
    })
    it('Validate that the Gender is required', () => {
        cy.get('.mr-1[required]').should('have.attr', 'required')
    })

    it('Validate the options are “Female”, “Male” and “Prefer not to disclose”', () => {
        cy.get('.radio').first().should('have.text', 'Male')
        cy.get('.radio').eq(1).should('have.text', 'Female')
        cy.get('.radio').eq(2).should('have.text', 'Prefer not to disclose')
    })
    it('Validate the options are clickable and not selected', () => {
        cy.get('[type="radio"]').first().click()
    })

    it('Click on the “Male” option and validate it is selected while the others are not selected', () => {
        cy.get('[type="radio"]').first().click()
        cy.get('[type="radio"]').first().should('be.checked')
        cy.get('[type="radio"]').not(':first').should('not.be.checked')
    })
    it('Click on the “Female” option and validate it is selected while the others are not selected', () => {
        cy.get('[type="radio"]').eq(1).click()
        cy.get('[type="radio"]').eq(1).should('be.checked')
        cy.get('[type="radio"]').not(':eq(1)').should('not.be.checked')
    })
    

    it('Validate that the Address input box is displayed', () => {
        cy.get('.input[placeholder="Enter your address"]').should('be.visible')
    })

    it('Validate that the Address input box is not required', () => {
        cy.get('.input[placeholder="Enter your address"]').should('not.have.attr', 'required')
    })

    it('Validate that the label of the Address input box is “Address”', () => {
        cy.get(':nth-child(3) >.label').should('have.text', 'Address')
    })

    it('Validate that the placeholder of the Address input box is “Enter your address*”', () => {
        cy.get('.input[placeholder="Enter your address"]').should('have.attr', 'placeholder', 'Enter your address*')
    })

    it('Validate that the Email input box is displayed', () => {
        cy.get('.input[placeholder="Enter your email"]').should('exist')
    })

    it('Validate that the Email input box is required', () => {
        cy.get('.input[placeholder="Enter your email"]').should('have.attr', 'required')
    })

    it('Validate that the label of the Email input box is “Email *”', () => {
        cy.get(':nth-child(4)>.label').should('have.text', 'Email *')
    })

    it('Validate that the placeholder of the Email input box is “Enter your email”', () => {
        cy.get('.input[placeholder="Enter your email"]').should('have.attr', 'placeholder', 'Enter your email')
    })

    it('Validate the phone inpux box is displayed and not required', () => {
        cy.get('.input[placeholder="Enter your phone number"]')
            .should('be.visible')
            .should('not.have.attr', 'required')
    })

    it('Validate that the label of the Phone input box is “Phone”', () => {
        cy.get(':nth-child(5) > .label').should('have.text', 'Phone')
    })

    it('Validate that the placeholder of thePhone input box is “Enter your phone number”', () => {
        cy.get('.input[placeholder="Enter your phone number"]').should('have.attr', 'placeholder', 'Enter your phone number')
    })

    it('Validate that the Message text area is displayed and is not required', () => {
        cy.get('.textarea').should('be.visible')
            .should('not.have.attr', 'required')
    })

    it('Validate that the label of the Message text area is “Message”', () => {
        cy.get(':nth-child(6)>.label').should('have.text', 'Message')
    })

    it('Validate that the placeholder of the Message text area is “Type your message here…”', () => {
        cy.get('.textarea[placeholder="Type your message here..."]')
            .should('have.attr', 'placeholder', 'Type your message here...')
    })

    it('Validate the label is “I give my consent to be contacted.”', () => {
        cy.get('.checkbox').should('be.visible')
    })

    it('Validate that the Consent checkbox is required', () => {
        cy.get('.checkbox>[type="checkbox"]').should('have.attr', 'required')
    })

    it('Click on the “I give my consent to be contacted.” checkbox and validate it is selected', () => {
        cy.get('.checkbox>[type="checkbox"]').check().should('be.checked')
    })

    it('Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected', () => {
        cy.get('.checkbox>[type="checkbox"]').uncheck().should('not.be.checked')
    })

    it('Validate the “SUBMIT” button is displayed and clickable', () => {
        cy.get('.control>.button')
            .should('exist')
            .and('be.enabled')
    })

    it('Validate that the button text is “SUBMIT”', () => {
        cy.get('.control>.button').should('have.text', 'SUBMIT')
    })

    it('Validate the submission form ', () => {
        cy.get('.input[placeholder="Enter your full name"]').type('Ayca')
        cy.get('[type="radio"]').eq(1).check().should('be.checked')
        cy.get('.input[placeholder="Enter your address"]').type('Tulip Terr')
        cy.get('.input[placeholder="Enter your email"]').type('nazayca@gmail.com')
        cy.get('.input[placeholder="Enter your phone number"]').type('8508902324')
        cy.get('.textarea').type('Hello World')
        cy.get('.checkbox>[type="checkbox"]').check()
        cy.get('.has-background-white-ter>form ').submit()
        cy.contains('Thanks for submitting!').should('exist')

    })
})

