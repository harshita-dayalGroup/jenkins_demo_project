export class iSathiDeleteCustomer{
    visitiSathiUrl(url){
        cy.visit(url)
    }
   get searchFieldForCustomerName(){
    return cy.get('[data-col-seq="1"] > .form-control')

    }
    typeNameInSearchFieldCustomerName(name){
        this.searchFieldForCustomerName.type(name).type("{enter}",{force:true})
    }
    get dropdownIconPath(){
       return  cy.get('#dropdownMenuLink')
    }
    clickDropDownLink(){
        this.dropdownIconPath.click({force:true})
    }
    get deleteOptionPath(){
      return  cy.get('.dropdown > .dropdown-menu > :nth-child(10) > a')
    }
    clickDeleteOption(){
        this.deleteOptionPath.click({force:true})
    }
    get optionOKForDeletingCustomer(){
        return cy.get('button:nth-child(2)')
    }
    clickOKOption(){
        this.optionOKForDeletingCustomer.click({force:true})
    }
}