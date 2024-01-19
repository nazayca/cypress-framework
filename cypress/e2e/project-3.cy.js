/// <reference types="cypress"/>
describe('validate login form', () => {
    beforeEach(() =>{
        cy.visit(`${Cypress.env("SITE_URL")}/frontend`)
    })
})