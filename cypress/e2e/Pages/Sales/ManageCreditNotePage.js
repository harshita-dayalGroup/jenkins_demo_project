export class ManageCreditNote{
 get   searchNumberCol(){
    return cy.get('[data-col-seq="2"] > .form-control')

    }
    typeInSearchColumn(data){
        this.searchNumberCol.type(data,{force:true}).type("{enter}",{force:true})
    }
  get  statusButton(){
        return cy.get("tbody tr td:nth-child(12) a")
    }
  clickStatusButton(){
    this.statusButton.click({force:true})
  }
  get statusDropDown(){
    return cy.get('#select2-salesreturninvoice-int_status_type-container')
  }
  clickStatusDropDown(){
    this.statusDropDown.click({force:true})
  }
  get searchField(){
    return cy.get('.select2-dropdown > .select2-search')
  }
  typeInSearchField(data){
    this.searchField.type(data,{force:true}).type("{enter}",{force:true})
  }
  get statusSaveButton(){
    return cy.get('#submitBtn')
  }
  clickStatusSaveButton(){
    this.statusSaveButton.click({force:true})
  }
}