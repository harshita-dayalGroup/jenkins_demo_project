export class RateManagement{
    visitRateManagementUrl(url){
        cy.visit(url)
    }
    get addRateTemplate(){
        return cy.get('#modalButton')
    }
    clickAddRateTemplate(){
        this.addRateTemplate.click({force:true})
    } 
    get nameTextField(){
        return cy.get('#productratetemplate-txt_name')
    }
    typeRateName(name){
        this.nameTextField.type(name)
    }
    get applicableOnDropDown(){
        return cy.get('#productratetemplate-int_rate_type')
    }
    selectApplicableOnData(data){
        this.applicableOnDropDown.select(data)
    }
    get isItMrpRadioButton(){
        return cy.get('#productratetemplate-int_rate_value_type > :nth-child(1) > input')

    }
    clickIsItMrpRadioButton(){
        this.isItMrpRadioButton.click({force:true})
    }
    get isItFinalRadioButton(){
        return cy.get('#productratetemplate-int_rate_value_type > :nth-child(2) > input')

    }
    clickIsItFinalRadioButton(){
        this.isItFinalRadioButton.click({force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')
    }
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
    get addPartyGroupButton(){
        return cy.get('.table-inside-box > .box-header > .view')
    }
    clickAddPartyGroup(){
        this.addPartyGroupButton.click({force:true})
    }
    get selectAllPatry(){
        return cy.get('.select-on-check-all')
    }
    clickSelectAllParty(){
        this.selectAllPatry.click({force:true})
    }
    get productSearchField(){
        return cy.get('#productratetemplateproductsearch-product')
    }
    typeProductNameInSearchField(data){
        this.productSearchField.type(data,{force:true}).type("{enter}",{force:true})
    }
    get editDateIcon(){
        return cy.get('[style="float:right;"] > .view')
    }
    clickEditDateIcon(){
        this.editDateIcon.click({force:true})
    }
    get clearIcon(){
        return cy.get('.kv-date-remove')
    }
    clickClearICon(){
        this.clearIcon.click({force:true})
    }
     get dateTextField(){
        return cy.get('#productratetemplateproduct-date')
     }
     typeDate(date){
        this.dateTextField.type(date,{force:true})
     }
    get productPackSearchFilter(){
        return cy.get('#productratetemplateproductsearch-productpack')
    }
    typeProductPack(data){
        this.productPackSearchFilter.type(data,{force:true}).type("{enter}",{force:true})
    }
    get currentRateInputBox(){
        return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(6) input")
    }
    typeRate(data){
        this.currentRateInputBox.type(data).type("{enter}",{force:true})
    }
}
