/// <reference types="cypress"/>
describe('validate elements on Contact Us page', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
    })

    it('Validate the heading is “Contact Us”', () => {
     cy.get('h1').should('contain.text', 'Contact Us')
    })
    
    it('Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”', () => {
        cy.get('#address').should('contain.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')
    })

    it('Validate the email is “info@techglobalschool.com"', () => {
        cy.get('[id="email"]').should('contains.text', 'info@techglobalschool.com')
    })

    it('Validate the phone number is “(773) 257-3010”', () => {
         cy.get('#phone-number').should('have.text', '(773) 257-3010')
    })
})
