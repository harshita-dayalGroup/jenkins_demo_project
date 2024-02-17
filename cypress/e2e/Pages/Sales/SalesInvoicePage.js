export class SalesInvoice{
    visitSalesInvoicePageUrl(url){
        cy.visit(url)
    }
    clickCreateSalesInvoiceButton(projectClone){
       cy.get('[href="/' + projectClone + '/Sales/index.php/invoice/create?intDocumentType=211"]').click({force:true})

    }
    // clickCreateSalesInvoiceButton(){
    //     this.createSalesInvoiceButtonPath
    // }
    get searchFieldForTypingInvoiceNumber(){
        return  cy.get('.box-body > .input-group > .form-control')
    }
    typeChallanNumber(ChallanNumber){
        this.searchFieldForTypingInvoiceNumber.type(ChallanNumber).type("{enter}",{force:true})
    }
    get firstCheckBox(){
        return  cy.get('.display-inline-block > .col-md-1 > .delivery-note')
    }
    clickFirstCheckBox(){
        this.firstCheckBox.check({force:true})
    }
    get paymentTermColumn(){
        return cy.get('.payment-term-cls')
    }
    selectPaymentTerm(paymentTerm){
        this.paymentTermColumn.select(paymentTerm)
    }
    get applyDiscountButton(){
        return  cy.get(':nth-child(3) > .btn')
    }
    clickApplyDiscountButton(){
        this.applyDiscountButton.click({force:true})
    }
    get saveButton(){
       return cy.get('.top_btn > .btn-primary')
    }
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
}