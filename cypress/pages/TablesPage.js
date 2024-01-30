class TablesPage {
  getCompanyTableHeaders() {
    return cy.get('#static_table thead tr')
  }
}

export default TablesPage