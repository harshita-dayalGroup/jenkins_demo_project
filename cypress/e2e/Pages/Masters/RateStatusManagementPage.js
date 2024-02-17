export class RateStatusManagement{
    visitRateManagementPage(url){
        cy.visit(url)
    }
    get rateTemplateDropDown(){
        return cy.get('#select2-productratetemplateproduct-int_product_rate_template_id-container')
    }
    clickRateTemplateDropDown(){
        this.rateTemplateDropDown.click({force:true})
        
    }
    get searchField(){
        return cy.get('.select2-search__field')
    }
    typeInSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    get withEffectFromDate(){
        return cy.get('#productratetemplateproduct-date')
    }
    selectWithEffectFormDate(date){
        this.withEffectFromDate.select(date)
    }
    get selectAllCheckBox(){
        return cy.get('.select-on-check-all')
    }
    clickSelectAllCheckBox(){
        this.selectAllCheckBox.click({force:true})
    }
    get approvedButton(){
        return cy.get('#approved')
    }
    clickApprovedButton(){
        this.approvedButton.click({force:true})
    }
}