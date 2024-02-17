export class ManageSalesReturn{
    get searchFieldColumn(){
        return cy.get('[data-col-seq="2"] > .form-control')
    }
    typeNumberInSearchColumn(data){
        this.searchFieldColumn.type(data,{force : true}).type("{enter}",{force:true})
    }
    get statusButton(){
        return cy.get("tbody tr:nth-child(1) td:nth-child(7) a")
    }
    clickStatusButton(){
        this.statusButton.click({force:true})
    }
    get statusDropDown(){
        return cy.get('#select2-salesreturnorder-int_status_type-container')
    }
    clickStatusDropDown(){
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
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
}