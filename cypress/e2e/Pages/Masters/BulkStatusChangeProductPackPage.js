export class BulkStatusChangeProductPack{
   visitBulkStatusChangeUrl(BulkStatusChangeProductPackUrl){
       cy.visit(BulkStatusChangeProductPackUrl)
   }
   get bulkStatusChangeSearchInputFieldPath(){
       return cy.get("div[ref='eFloatingFilterInputContainer'] div[role='presentation'] div[role='presentation'] input[aria-label='Pack Filter Input']")
    }
    get firstCheckBoxOnBulkStatusChangePath(){
       return cy.get("input[aria-label='Press Space to toggle row selection (unchecked)']")
    }
    get changeStatusButtonPath(){
       return cy.get('.float-end > .btn')
    }
    get changeStatusDropDownPath(){
       return cy.get(':nth-child(3) > .form-control')
    }
    typeInSearchFieldForBulkStatus(product){
       this.bulkStatusChangeSearchInputFieldPath.type(product).type("{enter}",{force:true})
    }
    checkTheFirstCheckBoxInBulkSatusChange(){
       this.firstCheckBoxOnBulkStatusChangePath.click({force:true})
    }
    clickChangeStatusButton(){
       this.changeStatusButtonPath.click({force:true})
    }
    selectApproveOption(){
       this.changeStatusDropDownPath.select("Approved")
    }
    get saveButtonPath(){
       return cy.get('.modal-footer > .btn')
   }
   clickSaveButton(){
       return this.saveButtonPath.click({force:true})
   }
 
}