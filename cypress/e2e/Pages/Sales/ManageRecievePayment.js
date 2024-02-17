export class ReceivePaymentPage{
    visitManageRecievePaymentPage(url)
{
  cy.visit(url)
}
get searchColumn(){
    return   cy.get('[data-col-seq="2"] > .form-control')
}
typeInSearchField(receivePaymentNumber){
    this.searchColumn.type(receivePaymentNumber + '{enter}',{force:true})
}
get statusButton(){
    return  cy.get('.text-center > .view')
}
clickStatusButton(){
    this.statusButton.click({force:true})
}
get statusDropdown(){
    return   cy.get('#select2-payment-int_status_type-container')
}
get actionDropDown(){
   return cy.get('.dropdown > .btn')
}
clickActionDropDown(){
    this.actionDropDown.click({force:true})
}
get paymentTaggingOption(){
   return cy.get(':nth-child(9) > .dropdown > .dropdown-menu > :nth-child(3) > a')
}
get saveButton(){
    return  cy.get('.top_btn > .btn-primary')
}
clickPaymentTaggingOption(){
    this.paymentTaggingOption.click({force:true})
}
clickSaveButton(){
    this.saveButton.click({force:true})
}
clickStatusDropDown(){
    this.statusDropdown.click({force:true})
}
}