export class ManageSTAPage{
    visitManageSTAPage(url){
        cy.visit(url)
    }
    get STANumberSearchField(){
        return cy.get('[data-col-seq="2"] > .form-control')
    }
    get statusChangeButtonPath(){
        return cy.get('tbody tr td:nth-child(12) a')
    }
    get statusChangeDropDownPath(){
        return cy.get('#select2-invoice-int_status_type-container')
    }
    get searchFieldPath(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get statusSaveButtonPath(){
        return cy.get(".modal-footer > .btn")
    }
   typeSTANumber(number){
    this.STANumberSearchField.type(number,{force:true}).type("{enter}",{force:true})
   }
   clickStatusChangeButton(){
    this.statusChangeButtonPath.click({force:true})
   }
   clickStatusChangeDropDown(){
    this.statusChangeDropDownPath.click({force:true})
   }
   typeInSearchField(status){
    this.searchFieldPath.type(status).type("{enter}",{force:true})
   }
   clickStatusSaveButtonPath(){
    this.statusSaveButtonPath.click({force:true})
   }

}