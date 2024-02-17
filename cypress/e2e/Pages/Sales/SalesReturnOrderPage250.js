export class SalesReturnOrderPage {
    visitsalesReturnOrderUrl(url) {
        cy.visit(url)
    }
    get salesReturnOrderDate() {
        return cy.get('#salesreturnorder-dat_sales_return')
    }
    get dateClearIcon() {
        return cy.get('#salesreturnorder-dat_sales_return-kvdate > .kv-date-remove')
    }
    clickDateClear() {
        this.dateClearIcon.click({ force: true })
    }
    typeSalesReturnOrderDate(date) {
        this.salesReturnOrderDate.type(date)
    }
    get addSalesOrderButton() {
        return cy.get('.float-end > .view')
    }
    get documentSeriesDropDown() {
        return cy.get('#select2-salesreturnorder-int_document_series_id-container')
    }
   
    clickDocumentSriesDropDown() {
        this.documentSeriesDropDown.click({ force: true })

    }
    get searchFieldForDocumentSeries() {
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeDocumentSeries(data) {
        this.searchFieldForDocumentSeries.type(data).type("{enter}", { force: true })
    }
    clickAddSalesOrderButton() {
        this.addSalesOrderButton.click({ force: true })
    }
    get customerTypeDropDown() {
        return cy.get('#select2-salesreturnorder-int_customer_type-container')
    }
    clickCustomerTypeDropDown() {
        this.customerTypeDropDown.click({ force: true })
    }
    get customerDropDown() {
        return cy.get('#select2-salesreturnorder-int_party_id-container')
    }
    clickCustomerDropDown() {
        this.customerDropDown.click({ force: true })
    }
    get searchField() {
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeInSearchField(data) {
        this.searchField.type(data).type("{enter}", { force: true })
    }
    get saveButton() {
        return cy.get('.modal-footer > .btn')
    }
    clickSaveButton() {
        this.saveButton.click({ force: true })
    }
    get returnButton() {
        return cy.get('.top_btn > .view')
    }
    clickReturnButton() {
        this.returnButton.click({ force: true })
    }
    get addIcon() {
        return cy.get('.td-remove')
    }
    clickAddIcon() {
        this.addIcon.click({ force: true })
    }
    get seacrchInvoiceField() {
        return cy.get('.select2-search__field')
    }
    typeInSearchInvoiceField(data) {
        this.seacrchInvoiceField.type(data, { force: true }).type("{enter}", { force: true }).type("{enter}", { force: true })

    }
    get saveReturnOrderButton() {
        return cy.get('#validateBtn')
    }
    clicksaveReturnOrderButton() {
        this.saveReturnOrderButton.click({ force: true })
    }
    typeInReturnNoOfPacksField(i, data) {
        cy.get(`.d-flex.remove_error_margin.justify-content-end .me-1 input:eq(${i})`)
            .type(data, { force: true });
    }
    selectOrganisation(i, data) {
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)  > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${9 * i + 9}) > td:nth-child(4)  select`).select(data)

    }
    get notInvoiceKnownAddProductButton() {
        return cy.get("form[role='form'] div div div div div div div table thead th:nth-child(5) svg")
    }
    clickNotInvoiceKnownAddProductButton() {
        this.notInvoiceKnownAddProductButton.click({ force: true })
    }
    clickProductDropDown(i) {
        return cy.get(`tbody tr:nth-child(${i + 1}) td:nth-child(1) div:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)`).click({ force: true })
    }
    clickProductPackDropDown(i) {
        return cy.get(`tbody tr:nth-child(${i + 1}) td:nth-child(2) div:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)`).click({ force: true })
    }
    typeReturnQty(i, data) {
        cy.get(`input[name='SalesReturnOrderDetail[${i}][int_pack_count]']`).type(data).type("{enter}", { force: true })
    }
    clickReceiveBranch(i) {
        cy.get(`tbody tr:nth-child(${i + 1}) td:nth-child(4) div:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1) span:nth-child(1)`).click({ force: true })
    }
    get validateButton() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(3) > button:nth-child(1)")
    }
    clickSaveInvoiceNotKnown() {
        this.validateButton.click({ force: true })
    }
  
}