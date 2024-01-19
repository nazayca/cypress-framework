/// <reference types="cypress"/>
describe('validate login form', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("SITE_URL")}/frontend/project-2`)
    })
    /*
    Validate that the username input box is displayed
    Validate that the username input box is not required
    Validate that the label of the username input box is “Please enter your username”
    Validate that the password input box is displayed
    Validate that the password input box is not required
    Validate that the label of the password input box is “Please enter your password”
    Validate the “LOGIN” button is displayed
    Validate the “LOGIN” button is clickable
    Validate that the button text is “LOGIN”
    Validate the “Forgot Password?” link is displayed
    Validate that the “Forgot Password?” link is clickable
    Validate that the link text is “Forgot Password?”
    */
    it('validate the login form', () => {

        const inputboxes = ['username', 'password']
        cy.get('#username, #password').each(($el) => {
            cy.wrap($el)
                .should('be.visible')
                .should('not.have.attr', 'required')

        })

        const labels = ['Please enter your username', 'Please enter your password']
        cy.get('div > label').each(($el, index) => {
            cy.wrap($el)
                .should('have.text', labels[index])
        })

        const buttonAndLink = ['LOGIN', 'Forgot Password?']
        cy.get('#login_btn').parent().children().each(($el, index) => {
            cy.wrap($el).should('be.visible')
                .should('have.text', buttonAndLink[index])

            cy.get('#login_btn').should('be.enabled')
            cy.get('#login_btn').next().should('not.be.disabled')

        })
    })

    /*
    Enter the username as “TechGlobal”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the success message is displayed as “You are logged in”
    Validate the logout button displayed with the text “LOGOUT”
    */
    it('Validate the valid login', () => {
        const text = ['TechGlobal', 'Test1234']
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(text[index])

        })

        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('be.visible').and('have.text', 'LOGOUT')
    })

    /*
    Enter the username as “TechGlobal”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Click on the “LOGOUT” button
    Validate that the login form is displayed
    */

    it('Validate the logout', () => {
        const text = ['TechGlobal', 'Test1234']
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(text[index])

        })

        cy.get('#login_btn').click()
        cy.get('#success_lgn').should('have.text', 'You are logged in')
        cy.get('#logout').should('be.visible')
            .and('have.text', 'LOGOUT').click()
        cy.get('.has-background-white-ter').should('be.visible')
    })

    /*
    Click on the “Forgot Password?” link
    Validate that the modal heading “Reset Password” is displayed
    Validate that the close button is displayed
    Validate that the email input box is displayed
    Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”
    Validate the “SUBMIT” button is displayed
    Validate the “SUBMIT” button is clickable
    Validate that the button text is “SUBMIT”
    */

    it('Validate the Forgot Password? Link and Reset Password modal', () => {
        cy.get('#login_btn').next().click()
        cy.get('.delete').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('div>label[for="email"]').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Enter your email address and we\'ll send you a link to reset your password.');

        })

        cy.get('#submit').should('be.visible').and('be.enabled')
        .should('have.text', 'SUBMIT')

    })

    /*
    Click on the “Forgot Password?” link
    Validate that the “Reset Password” modal is displayed
    Click on the close button
    Validate that the “Reset Password” modal is closed
    */

    it('Validate the Reset Password modal close button', () => {
        cy.get('#login_btn').next().click()
        cy.get('.modal-card')
        cy.get('.delete').click().should('not.be.exist')
    })

    /*
    Click on the “Forgot Password?” link
    Enter an email
    Click on the “SUBMIT” button
    Validate the form message “A link to reset your password has been sent to your email address.” is 
    displayed under the “SUBMIT” button
    */

    it(' Validate the Reset Password form submission', () => {
        cy.get('#login_btn').next().click()
        cy.get('#email').type('jhondoe@gmail.com')
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('be.visible')
        .and('have.text', 'A link to reset your password has been sent to your email address.')
    })

    /*
    Leave username empty
    Leave password empty
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */

    it('Validate the invalid login with the empty credentials', () => {
        cy.get('#username').clear().should('not.have.value')
        cy.get('#password').clear().should('not.have.value')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')
      
    })

    /*
    Enter the username as “John”
    Enter the password as “Test1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */

    it('Validate the invalid login with the wrong username', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('Test1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')
      
    })

    /*
    Enter the username as “TechGlobal”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Password entered!” above the form
    */

    it('Validate the invalid login with the wrong password', () => {
        cy.get('#username').type('TechGolabl')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')

    })

    /*
    Enter the username as “John”
    Enter the password as “1234”
    Click on the “LOGIN” button
    Validate the failure message is displayed as “Invalid Username entered!” above the form
    */

    it('Validate the invalid login with the wrong username and password', () => {
        cy.get('#username').type('John')
        cy.get('#password').type('1234')
        cy.get('#login_btn').click()
        cy.get('#error_message').should('be.visible')
        .and('have.text', 'Invalid Username entered!')

    })

})