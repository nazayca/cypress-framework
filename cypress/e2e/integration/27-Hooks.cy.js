/// <reference types="cypress"/>

describe('Hooks', () => {
    before(() => {
        cy.log('Runs once before all tests in the block')
    })

    after(() => {
        cy.log('Runs once after all tests in the block')
    })

    beforeEach(() => {
        cy.log('Runs before each test in the block')
    })

    afterEach(() => {
        cy.log('Runs after each test in the block')
    })

    it('Example test 1', () => {
        cy.log('example text1')
    })

    it('Example test 2', () => {
        cy.log('example text2')
    })
})


/**
 * 1.before
 * 2. beforeEach
 * 3. it - Example Test 1
 * 4. afterEach
 * 5. beforeEach
 * 6. it - Example test 2
 * 7. afterEach
 * 8. after
 */