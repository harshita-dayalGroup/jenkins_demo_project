export class MaterialInPage{
    visitMaterialInPage(url){
        cy.visit(url)
    }
    get createMaterialInButton(){
             return cy.get('.float-end > .view')
    }
    clickCreateMaterialInButton(){
        this.createMaterialInButton.click({force:true})
    }
    get productPackDropDown(){
        return cy.get('#select2-stocktxdetail-int_product_pack_id-container')
    }
    clickProductPackDropDown(){
        this.productPackDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeProductPackName(data){
        this.searchField.type(data,{force:true}).type("{enter}",{force:true})
    }
    get numberofPackField(){
        return cy.get('#stocktxdetail-int_pack_count')
    }

    typeNumberOfPacks(data){
        this.numberofPackField.type(data).click({force:true})
    }
    get rateField(){
        return cy.get('#stocktxdetail-dbl_rate')
    }
    typeInRateField(data){
        this.rateField.type(data,{force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')
    }
    clickSaveButton(){
        this.saveButton.click({Force:true})
    }
    get dateSearch(){
        return cy.get('#stocktxsearch-dat_stock_tx')
    }
    typeDateInSearchField(date){
        this.dateSearch.type(date,{force:true}).type("{enter}",{force:true})
    }
    get firstStatusChangeButton(){
        return cy.get("tbody tr:nth-child(1) td:nth-child(10)  a")
    }
     clickFirstStatusChangeButton(){
        this.firstStatusChangeButton.click({force:true})
     }
     get statusDropDown(){
        return cy.get('#select2-stocktx-int_status_type-container')
     }
     clickStatusDropDown(){
        this.statusDropDown.click({force:true})
     }
     get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
     }
     typeSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    get statusSaveButton(){
        return cy.get('#submitBtn')
    }
    clickStatusSaveButton(){
        this.statusSaveButton.click({force:true})
    }
    
}