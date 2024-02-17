export class ManageSalesInvoice{
    visitSalesInvoicePage(url){
        cy.visit(url)
    }
  get  searchInvoiceNumberColumnFilter(){
   return cy.get('[data-col-seq="2"] > .form-control')

    }
    typeInvoiceNumber(InvoiceNumber){
        this.searchInvoiceNumberColumnFilter.click({ force: true }).type(InvoiceNumber + '{enter}')
    }
    get statusChangeButton(){
        return  cy.get('[data-col-seq="11"] > .view')
    }
    clickStatusChangeButton(){
        this.statusChangeButton.click({force:true})
    }
    get statusChangeDropDown(){
        return  cy.get('.field-invoice-int_status_type > .select2 > .selection > .select2-selection')
    }
    clickStatusChangeDropDown(){
        this.statusChangeDropDown.click({force:true})
    }
}