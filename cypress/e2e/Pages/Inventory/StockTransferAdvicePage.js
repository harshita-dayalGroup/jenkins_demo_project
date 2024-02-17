export class StockTransferAdvice {
    visitStockTransferPage(url) {
        cy.visit(url)
    }
    get addSTAButtonPath() {
        return cy.get('[href="/MINOR/Sales/index.php/invoice/create?intDocumentType=212"]')
    }
    clickAddSTAButton() {
        this.addSTAButtonPath.click({ force: true })
    }
    get searchFieldPath() {
        return cy.get('.box-body > .input-group > .form-control')
    }
    get checkBoxOfSTAPath() {
        return cy.get("body > div:nth-child(2) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) input")
    }
    typeInRateInputFied(i) {
        return cy.get(`:nth-child(${i}) > .rate > .input-micro`).clear().type("980")
    }
    get applyDiscountButton() {
        return cy.get(':nth-child(3) > .btn')
    }
    get saveSTAButtonPath() {
        return cy.get('.top_btn > .btn-primary')
    }
    typeSTAInSearchField(number) {
        this.searchFieldPath.type(number).type("{enter}", { force: true })
    }
    clickcheckBoxOfSTA() {
        this.checkBoxOfSTAPath.click({ force: true })
    }

    clickApplyDiscountButton() {
        this.applyDiscountButton.click({ force: true })
    }
    clickSaveButton() {
        this.saveSTAButtonPath.click({ force: true })
    }
    getSTANumberAlias() {
        return cy.get('.breadcrumb-item > .view').as('STANumber')
    }
    getSTANumber() {
        return cy.get('@STANumber')
    }
}