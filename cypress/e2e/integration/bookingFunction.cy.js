///<reference types="cypress"/>
import BookingPage from "../../pages/BookingPage"

describe('booking page test', () => {
  beforeEach(() => {

    cy.clickCard("Booking Function")

    cy.fixture('bookingFixture').then(function (data) {
      this.labels = data.labels

    })

  })

  const bookingPage = new BookingPage()

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

  it('Test Case 01 - Validate the default Book your trip form', function () {
    bookingPage.getRadioButton().each(($el, index) => {
      cy.wrap($el).should('be.visible').and('be.enabled')

    })
    bookingPage.getRadioButton().first().should('have.attr', 'checked')
    bookingPage.getRadioButton().last().should('not.have.attr', 'checked')

    bookingPage.getLabels().each(($el, index) => {
      cy.wrap($el).should('have.text', this.labels[index]).should('be.visible')
    })

    bookingPage.getDropdowns().each(($el) => {
      cy.wrap($el).should('exist').and('be.visible')
    })

    bookingPage.getDateInput().each(($el, index) => {

      if (index === 0) {
        cy.wrap($el).should('have.attr', 'placeholder', 'MM/DD/YY').and('be.enabled')
      } else {
        cy.wrap($el).should('have.attr', 'placeholder', 'MM/DD/YY')
          .should('be.disabled')
      }
    }).first().click()

    bookingPage.getDatePicker().should('be.visible')
    bookingPage.getDateInput().eq(0)
      .clear()
      .should('have.value', '')
      .type('{enter}')

    cy.get('div:nth-child(7)>.select option:selected').should('have.text', '1')
      .should('be.visible')
    cy.get('div:nth-child(8)>.select option:selected').should('have.text', 'Adult (16-64)')
      .should('be.visible')

    bookingPage.getBookButton().should('be.enabled').and('be.visible')

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

  it('Test Case 02 - Validate the Book your trip form when Round trip is selected', function () {

    bookingPage.getRadioButton().first().check()
      .should('be.checked')
    bookingPage.getRadioButton().eq(1).should('not.be.checked')

    bookingPage.getLabels().each(($el, index) => {
      cy.wrap($el).should('have.text', this.labels[index]).should('be.visible')
    })

    bookingPage.getDropdowns().each(($el) => {
      cy.wrap($el).should('exist').and('be.visible')
    })

    bookingPage.getDateInput().each(($el, index) => {

      if (index === 0) {
        cy.wrap($el).should('have.attr', 'placeholder', 'MM/DD/YY').and('be.enabled')
      } else {
        cy.wrap($el).should('have.attr', 'placeholder', 'MM/DD/YY')
          .should('be.disabled')
      }
    }).first().click()

    bookingPage.getDatePicker().should('be.visible')
    bookingPage.getDateInput().eq(0)
      .clear()
      .should('have.value', '')
      .type('{enter}')

      cy.selectDropdownOption('div:nth-child(7)>.select', '1')
      .should('be.visible')
      cy.selectDropdownOption('div:nth-child(8)>.select option:selected, Adult (16-64)')
      .should('be.visible')

    bookingPage.getBookButton().should('be.enabled').and('be.visible')

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

  it.only('Test Case 03 - Validate the booking for 1 passenger and one way', function(){
    bookingPage.getRadioButton().eq(1).check()
    bookingPage.getDropdowns().eq(0).click()


    cy.selectDropdownOption(':nth-child(2) > .select > select', 'Business')
        
    })

  })


