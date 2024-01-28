class BookingPage {
    getRadioButton(){
        return cy.get('.mr-1')
    }

    getLabels(){
        return cy.get('.field>.label')
    }
    getDropdowns(){
        return cy.get('.select')
    }

    getDateInput(){
        return cy.get('input[type="text"]')
    }

    getDatePicker(){
        return cy.get('.react-datepicker ')
    }

    getBookButton(){
        return cy.get('.null')
    }
}

export default BookingPage;