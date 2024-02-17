export class StockTransferRequestPage{
    visitStockTransferRequestPageUrl(strUrl){
        cy.visit(strUrl)
    }
    get addSTRButtonPath(){
        return cy.get('#addButton')
    }
    get documentSeiesField(){
        return cy.get('#select2-indentorder-int_document_series_id-container')
    }
    clickDocumentSeriesField(){
        this.documentSeiesField.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeInSearchFeild(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    get transferFromDropDownPath(){
        return cy.get('#select2-indentorder-int_operating_branch_id-container')
    }
    get searchFieldPath(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get strTypeDropDownPath(){
        return cy.get('#indentorder-int_indent_order_type')
    }
    get transferToDropDownPath(){
        return cy.get('#select2-indentorder-int_bill_to_branch_id-container')
    }
    get strSaveButtonPath(){
        return cy.get('.modal-footer > .btn')
    }
    get addProductsIconPath(){
        return cy.get("span[aria-label='Add/Modify Products ']")
    }
     productDropDownPath(i) {
         cy.get(`#select2-indentorderdetail-${i}-int_product_id-container`).click({force:true});
      }
    get modifySearchFieldPath(){
        return cy.get('.select2-search__field')
    }
  productPackDropDownPath(i){
         cy.get(`#select2-indentorderdetail-${i}-int_product_pack_id-container`).click({force:true});
    }
    typeNumberOfPacks(i, numberOfPacks){
         cy.get(`#indentorderdetail-${i}-int_pack_count`).type(numberOfPacks)
    }
    clickQuantityField(i){
        return cy.get(`#indentorderdetail-${i}-dbl_quantity`).click({force:true})
    }
    get saveButtonPath(){
        return cy.get("button[type='submit']")
    }
    get plusIconPath(){
        return cy.get("body div th:nth-child(6) svg")
    }
   

    clickaddSTRButton(){
     this.addSTRButtonPath.click({force:true})
    }
    clickTransferFromDropDown(){
        this.transferFromDropDownPath.click({force:true})
    }
    typeTransferFromBranchInSearchField(branchFrom){
        this.searchFieldPath.type(branchFrom).type("{enter}",{force:true})
    }
    clickstrTypeDropDown(strType){
        this.strTypeDropDownPath.select(strType)
    }
    clicktransferToDropDown(){
        this.transferToDropDownPath.click({force:true})

    }
    typeTransfertoBranchInSearchField(branchTo){
        this.searchFieldPath.type(branchTo).type("{enter}",{force:true})
    }
   clickSaveButton(){
    this.strSaveButtonPath.click({force:true})
   }
   clickAddProductsIcon(){
    this.addProductsIconPath.click({force:true})
   }

   typeProductInSearchField(productName){
    this.modifySearchFieldPath.type(productName).type("{enter}",{force:true})
   }

   typeProductPackInSearchField(productPackName){
    this.modifySearchFieldPath.type(productPackName).type("{enter}",{force:true})
   }

 clickplusIcon(){
    this.plusIconPath.click({force:true})
 }
 clickDeleteButton(){
    this.deleteIconPath.click({force:true})
 }
 clickAdditionalSaveButton(){
    this.saveButtonPath.click({force:true})

 }
 getSTRNumberAlias() {
    return  cy.get("body > div:nth-child(2) > section:nth-child(9) > div:nth-child(1) div nav ol li").as("STRNumberAlias");
  }

  getSTRNumber() {
    return cy.get("@STRNumberAlias");
  }



}