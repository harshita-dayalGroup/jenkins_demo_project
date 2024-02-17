export class ManageDispatchPage {
    visitManageDispatchPageUrl(url){
        cy.visit(url)
    }
    get challanNumberColumnSearchFieldPath(){
        return cy.get('[data-col-seq="2"] > .form-control')
    }
    get statusChangeButtonPath(){
        return cy.get("tbody tr td:nth-child(10) a")
    }
    get statusChangeDropDownPath(){
        return cy.get('#select2-delivery-int_status_type-container')
    }
    get searchFieldPath(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get statusSaveButtonPath(){
        return cy.get(".modal-footer > .btn")
    }
    get searchColumn(){
        return cy.get("body div thead td:nth-child(4) input")
    }
    typeInSearchColumn(dispatchType){
        this.searchColumn.type(dispatchType).type("{enter}",{force:true})
    }
    typeInChallanNumberColumnSearchField(number){
        this.challanNumberColumnSearchFieldPath.type(number,{force:true}).type("{enter}",{force:true})
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
    clickStatusSaveButton(){
        this.statusSaveButtonPath.click({force:true})
    }
  
}