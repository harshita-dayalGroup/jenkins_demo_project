export class CreditNoteWithGST{
    visitCreditNoteWithGSTUrl(url){
        cy.visit(url)
    }
    get addCreditNoteButton(){
        return cy.get('.float-end > .view')
    }
    clickAddCreditButton(){
        this.addCreditNoteButton.click({force:true})
    }
    get customerDropDown(){
        return cy.get('#select2-salesreturninvoice-int_customer_type-container')
    }
    clickCustomerDropDown(data){
        this.customerDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeDataInSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    get partyTypeDropDown(){
        return cy.get('#select2-salesreturninvoice-int_party_id-container')
    }
    clickPartyTypeDropDown(){
        this.partyTypeDropDown.click({force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')

    }
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
    get receiveButton(){
        return cy.get('.top_btn > .view')
    }
    clickReceiveButton(){
        this.receiveButton.click({force:true})
    }
    get searchMaterialReceiveField(){
        return cy.get('.input-group > .form-control')
    }
    typeInSearchMaterialReceiveField(data){
        this.searchMaterialReceiveField.type(data).type("{enter}",{force:true})
    }
     clickcheckBox(i){
         cy.get(`#receive_checkbox_${i}`).click({force:true})
    }
    get crNoteSaveButton(){
        return cy.get('#validateBtn')
    }
    clickCrNoteSaveButton(){
        this.crNoteSaveButton.click({force:true})
    }

}