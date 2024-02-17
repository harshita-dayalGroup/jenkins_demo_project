export class ManageMaterialReceive{
  get searchColumn(){
    return cy.get('[data-col-seq="2"] > .form-control')

  }
  typeInSearchColumn(number){
    this.searchColumn.type(number,{force:true}).type("{enter}",{force:true})
  }
  get statusButton(){
    return cy.get("tbody tr:nth-child(1) td:nth-child(9) a")
  }
  clickStatusButton(){
    this.statusButton.click({force:true})
  }
  get statusDropDown(){
    return cy.get('#select2-materialreceive-int_status_type-container')
  }
  clickStatusDropdown(){ 
    this.statusDropDown.click({force:true})
  }
get searchField(){
    return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
}
typeInSearchField(data){
    this.searchField.type(data).type("{enter}",{force:true})
}
get saveButton(){
    return cy.get('#submitBtn')
}
clickSaveButton()
{
    this.saveButton.click({force:true})
}
}