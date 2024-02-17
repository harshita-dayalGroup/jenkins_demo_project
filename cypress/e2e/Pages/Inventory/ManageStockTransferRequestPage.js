export class ManageStockTransferRequestPage{
    visitManageSTRPage(url){ cy.visit(url)}
    get numberSearchColumnPath(){
        return cy.get('[data-col-seq="3"] > .form-control')
    }
    get statusChangeButtonPath(){
        return cy.get("tbody tr:nth-child(1) td:nth-child(8) a ")

    }
    get addDispatchButtonPath(){
        return cy.get('.top_btn > .view')
    }
    get statusChangeDropDown(){
        return cy.get('#select2-indentorder-int_status_type-container')
    }
    get searchFieldPath(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get statusSaveButtonPath(){
        return cy.get(".modal-footer > .btn")
    }
    get sucessMessage(){
        return cy.get('[data-notify="message"]')
    } 
    clickStatusChangeButton(){
        this.statusChangeButtonPath.click({force:true})
    }
    clickStatusChangeDropdown(){
        this.statusChangeDropDown.click({force:true})
    }
   typeSTRnumber(number){
    this.numberSearchColumnPath.type(number,{force:true}).type("{enter}",{force:true})
   }
  
   typeInSearchField(status){
    this.searchFieldPath.type(status).type("{enter}",{force:true})
   }
   clickStatusSaveButton(){
    this.statusSaveButtonPath.click({force:true})
   }
   verifyMessage(){
    this.sucessMessage.should('have.text',"Status has been updated successfully.")
   }
  
}