export class StockRecievePage{
    visitStockRecievePage(url){
        cy.visit(url)
    }
    get mainBranchDropDownPath(){
        return cy.get('.branch-menu')
    }
    get selectBranchDropDownPath(){
        return cy.get('#select2-nav-branch-container')
    }
    get searchFieldPath(){
        return cy.get('.select2-search__field')
    }
    get searchColumnforNumber(){
        return cy.get('[data-col-seq="2"] > .form-control')
    }
    get marksAsRecieveButton(){
        return cy.get("tbody tr:nth-child(1) td:nth-child(9) a span.btn.btn-sm.btn-success")
    }
    clickMainBranchDropDown(){
        this.mainBranchDropDownPath.click({force:true})
    }
    clickBranchDropDown(){
        this.selectBranchDropDownPath.click({force:true})
    }
    typeInSearchField(branch){
        this.searchFieldPath.type(branch).type("{enter}",{force:true})
    }
    typeInSearchColumnforNumber(number){
        this.searchColumnforNumber.type(number,{force:true}).type("{enter}",{force:true})
    }
    verifyMarksAsRecieveButton(){
        this.marksAsRecieveButton.should('be.visible').and('have.text', ' Mark as Received');
    }
}