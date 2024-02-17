export class ViewRateList{
    visitViewRateListPage(url){
        cy.visit(url)
    }
    get sideFilter(){
        return cy.get('.anchor-side-bar')
    }
    clickSideFilter(){
        this.sideFilter.click({forcd:true})
    }
    get periodFilter(){
        return cy.get(':nth-child(3) > .box-header')
    }
    clickPeriodFilter(){
        this.periodFilter.click({force:true})
    }
    get dateRemover(){
        return cy.get('.kv-date-remove')
    }
    clickDateRemover(){
        this.dateRemover.click({force:true})
    }
    get editDate(){
        return cy.get('#w0')
    }
    writeDate(date){
        this.editDate.type(date)
    }
    get partyFilter(){
        return cy.get(':nth-child(4) > .box-header')
    }
    clickPartyFilter(){
        this.partyFilter.click({force:true})
    }
    get partyTypeFilter(){
        return cy.get(':nth-child(9) > .select2 > .selection > .select2-selection > .select2-selection__rendered')
    }
    clickPartyTypeFilter(data){
        this.partyTypeFilter.click({force:true})
    }
    get textFieldForPartyName(){
        return  cy.get("span[aria-expanded='true'] ul li input")
    }
    typePartyName(data){
        this.textFieldForPartyName.type(data,{force:true}).type("{enter}",{force:true})
    }
    get productFilterOption(){
        return cy.get(':nth-child(5) > .box-header')
    }
    clickProductFilterOption(){
        this.productFilterOption.click({force:true})
    }
    get productSelectionField(){
        return cy.get('.box-body > :nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field')
    }
    selectProducts(data){
        this.productSelectionField.click({force:true}).type(data,{force:true}).type("{enter}",{force:true})
    }
    get showButtonPath(){
        return cy.get('#btnSaveReportFilter')
    }
    clickShowButton(){
        this.showButtonPath.click({force:true})
    }
    get applicableOnFilter(){
        return cy.get(':nth-child(6) > .box-header')

    }
    clickApplicableOnFilter(){
        this.applicableOnFilter.click({force:true})
     }
     get applicableOnSelection(){
        return cy.get(':nth-child(6) > .box-body > .form-group > .select2 > .selection > .select2-selection')
     }
     clickOnApplicableDropDown(){
        this.applicableOnSelection.click({force:true})
     }
     get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
     }
     typeSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
     }

}