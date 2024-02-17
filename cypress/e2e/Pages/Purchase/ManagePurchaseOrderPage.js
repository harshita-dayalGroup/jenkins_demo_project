export class ManagePurchaseOrder{
   get searchColumn(){
    return cy.get('[data-col-seq="2"] > .form-control')
   }
   typeInSearchColumn(number){
    this.searchColumn.type(number,{force:true}).type("{enter}",{force:true})
   }
   get statusButtonPath(){
    return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(9) a")
   }
   clickStatusButtonPath(){
    this.statusButtonPath.click({force:true})
   }
   get statusDropDown(){
    return cy.get('#select2-purchaseorder-int_status_type-container')
   }
   clickStatusDropDown(){
    this.statusDropDown.click({force:true})
   }
   get searchField(){
    return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
   }
  
   typeInSearchField(status){
    this.searchField.type(status,{force:true}).type("{enter}",{force:true})
   }
   get saveButton(){
    return cy.get('#submitBtn')
   }
   clickSaveButton(){
    this.saveButton.click({force:true})
   }
}