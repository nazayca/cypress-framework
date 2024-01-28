/// <reference types="cypress"/>
describe('validate login form', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend/project-3`)
    })

/*
Validate that the “One way” radio button is displayed enabled and selected by default .
Validate that the “Round trip” radio button is displayed enabled and not selected by default.
Validate that the “Cabin Class” label. and dropdown are displayed
Validate that the “From” label. and dropdown are displayed
Validate that the “To” label. and dropdown are displayed
Validate that the “Depart” label. and date picker is displayed
Validate that the “Return” label .and date picker is displayed and disabled
Validate that the “Number of passengers” label. and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” category label. and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
*/

    it('Case 01 - Validate the default Book your trip form', () => {
        cy.get('.mr-1').each(($el) => {
            cy.wrap($el).should('be.visible').and('be.enabled')
        }).first().should('have.attr', 'checked')
        cy.get('.mr-1').last().should('not.have.attr', 'checked')

        const labels = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']
        cy.get('.field>.label').each(($el, index) => {
            cy.wrap($el).should('have.text', labels[index]).should('be.visible')
         })

         cy.get('.select').each(($el) => {
            cy.wrap($el).should('exist').and('be.visible')
        })  
        cy.get('input[type="text"]').first().and('have.attr','placeholder', 'MM/DD/YY')
       .click()
        cy.get('.react-datepicker').first().should('be.visible')
        cy.get('input[type="text"]').first()
        .clear()
        .should('have.value', '')
        .type('{enter}')
       
        cy.get('input[type="text"]').eq(1).and('have.attr','placeholder', 'MM/DD/YY')
        .should('be.disabled')

        cy.get('div:nth-child(7)>.select option:selected').should('have.text','1')
        .should('be.visible')
        cy.get('div:nth-child(8)>.select option:selected').should('have.text', 'Adult (16-64)')
        .should('be.visible')

        cy.get('.null').should('have.visible').and('be.enabled')
       
    })
/*
Click on the “Round trip” radio button and validate it is selected
Validate that the “One way” radio button is not selected
Validate that the “Cabin Class” label and dropdown are displayed
Validate that the “From” label and dropdown are displayed
Validate that the “To” label and dropdown are displayed
Validate that the “Depart” label and date picker is displayed
Validate that the “Return” label and date picker is displayed
Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
Validate that the “BOOK” button is displayed and enabled
*/
    it('Case 02 - Validate the Book your trip form when Round trip is selected', () => {
        cy.get('.mr-1').first().check()
        .should('be.checked')
        cy.get('.mr-1').eq(1).should('not.be.checked')

        const labels = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1']
        cy.get('.field>.label').each(($el, index) => {
            cy.wrap($el).should('have.text', labels[index]).should('be.visible')
         })

         cy.get('.select').each(($el) => {
            cy.wrap($el).should('exist').and('be.visible')
        }) 

        cy.get('input[type="text"]').first().and('have.attr','placeholder', 'MM/DD/YY')
        .click()
         cy.get('.react-datepicker').first().should('be.visible')
         .type('01/20/2024{enter}')
         cy.get('input[type="text"]').first()
         .and('have.value', '01/20/2024')
         .clear()
         .should('have.value', '')
         .type('{enter}')
        
         cy.get('input[type="text"]').eq(1).and('have.attr','placeholder', 'MM/DD/YY')
         .should('be.disabled')
 
         cy.get('div:nth-child(7)>.select option:selected').should('have.text','1')
         .should('be.visible')
         cy.get('div:nth-child(8)>.select option:selected').should('have.text', 'Adult (16-64)')
         .should('be.visible')

         cy.get('null').should('have.visible').and('be.enabled')
    })
/*
Select the “One way” radio button
Select “Business” for the “Cabin Class” dropdown
Select “Illinois” for the “From” dropdown
Select “Florida” for the “To” dropdown
Select the next week for the ”Depart”
Select “1” for the “Number of passengers” dropdown
Select “Senior (65+)” for the Passenger 1 dropdown
Click on the “BOOK” button
Validate the booking information displayed below
DEPART
IL to FL
{dynamic date}
Number of passengers: 1
Passenger 1: Senior (65+)
Cabin Class: Business
*/
    it.only('Validate the booking for 1 passenger and one way', () => {
        cy.get('.mr-1').first().should('be.checked')
      

        // const options = ['Business', 'Illinois', 'Florida', '01/28/2024', '1', 'Senior (65+)']

        // cy.get('.select>select>option').each(($el, index) => {
        //     cy.wrap($el).contains(options[index]).realClick()
        // }) 


        cy.get('.select').first().click()
        cy.get('.select>select>option').each(($el, index) => {
              if($el.text() === 'Business'){
                cy.wrap($el).click({ force: true })
              }
             
        })

        // cy.get('.select').first().select('Business').invoke('val').should('have.value','Business')
        // cy.get('.select>select>option').eq(2).select('Business').invoke('text').should('eq','Business')
        // // cy.get('.select').eq(2).realClick()   
        // cy.get('.select>select>option').eq(18).realClick().should('have.text', 'Illinois') 
        // cy.get('.select').eq(7).click() 
        // cy.get('.select>select>option').eq(12).realClick().should('have.text', 'florida') 
       

    })
})