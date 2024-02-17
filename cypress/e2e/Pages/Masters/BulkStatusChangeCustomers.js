export class BulkStatusChangeCustomersPage{
    visitBulkStatusChangeCustomersUrl(url){
        cy.visit(url)
    }
    get searchNameColumnPath(){
        return cy.get('#ag-43-input')
    }
    get checkBox(){
        return cy.get("input[aria-label='Press Space to toggle row selection (unchecked)']")
    }
    get changeStatusButtonPath(){
        return cy.get('.float-end > .btn')}
    get changeStatusDropDown(){
        return cy.get(':nth-child(3) > .form-control')
    }
    get statusSaveButtonPath(){
        return cy.get('.modal-footer > .btn')
    }
    typeInSearchNameColumnPath(customerName){
      this.searchNameColumnPath.type(customerName).type("{enter}",{force:true})
    }
    clickCheckBox(){
        this.checkBox.click({force:true})
    }
    clickChangeStatusButton(){
        this.changeStatusButtonPath.click({force:true})
    }
    selectchangeStatusDropDown(){
        this.changeStatusDropDown.select("Approved")
    }
    clickStatusSaveButton(){
        this.statusSaveButtonPath.click({force:true})
    }

}