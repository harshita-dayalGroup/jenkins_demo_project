export class BulkMaterialInPage{
    clickBulkEntryButton(projectClone){
        cy.get(`[href="/${projectClone}/Inventory/index.php/stock-tx/entry"]`).click({force:true})

    }
    get seriesDropDown(){
        return cy.get('#select2-stocktx-int_document_series_id-container')
    }
    clickSeriesDropDown(){
        this.seriesDropDown.click({force:true})
    }
    get searchSeriesField(){
        return cy.get('.select2-search__field')

    }
    typeSearchField(series){
        this.searchSeriesField.type(series).type("{enter}",{force:true})
    }
     dropDownOfProduct(i){
         cy.get(`#tr_${i} > .hide_select2_border > .select2 > .selection > .select2-selection`).click({force:true})
    }
    get finalButton(){
        return cy.get('#final')
    }
    clickFinalButton(){
        this.finalButton.click({force:true})
    }
    get approveButton(){
        return cy.get('#approve')
    }
    clickApproveButton(){
        this.approveButton.click({force:true})
    }
}