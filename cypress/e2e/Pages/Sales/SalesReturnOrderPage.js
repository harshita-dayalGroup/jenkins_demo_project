export class SalesReturnOrderPage{
    visitsalesReturnOrderUrl(url){
        cy.visit(url)
    }
    get addSalesOrderButton(){
        return cy.get('.float-end > .view')
    }
    clickAddSalesOrderButton(){
        this.addSalesOrderButton.click({force:true})
    }
    get customerTypeDropDown(){ 
        return cy.get('#select2-salesreturnorder-int_customer_type-container')
    }
    clickCustomerTypeDropDown(){
        this.customerTypeDropDown.click({force:true})
    }
    get customerDropDown(){
        return cy.get('#select2-salesreturnorder-int_party_id-container')
    }
    clickCustomerDropDown(){
        this.customerDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeInSearchField(data){
       this.searchField.type(data).type("{enter}",{force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')
    }
    clickSaveButton()
    {
        this.saveButton.click({force:true})
    }
    get returnButton(){
        return cy.get('.top_btn > .view')
    }
    clickReturnButton(){
        this.returnButton.click({force:true})
    }
    get addIcon(){
        return cy.get('.td-remove')
    }
    clickAddIcon(){
        this.addIcon.click({force:true})
    }
   get seacrchInvoiceField(){
    return cy.get('.select2-search__field')
   }  
   typeInSearchInvoiceField(data){
    this.seacrchInvoiceField.type(data,{force:true}).type("{enter}",{force:true})
    
   }
   get saveReturnOrderButton(){
    return cy.get('#validateBtn')
   }
   clicksaveReturnOrderButton(){
    this.saveReturnOrderButton.click({force:true})
  }
 typeInReturnNoOfPacksField(i){
    cy.get(`.d-flex.remove_error_margin.justify-content-end .me-1 input:eq(${i})`)
    .type('1',{force:true});
 }
 selectOrganisation(i){
    cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)  > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${9*i+9}) > td:nth-child(4)  select`).select("HE - Works (Head office)")

 }

}