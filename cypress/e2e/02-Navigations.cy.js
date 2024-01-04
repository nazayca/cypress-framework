/// <reference types="cypress"/>
describe('Cypress Navigation', () => {
    it('Go to ULR, refresh, navigate forward and back', () => {
        cy.visit('https://techglobal-training.com/')
        //refresh page
        cy.reload()
       // nevigate to another page
        cy.visit('https://www.google.com/')
      //nevigate back
      cy.go('back')

      cy.go('forward')
    })
})